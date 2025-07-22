import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import { Webhook } from "svix";
import { WebhookEvent } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
import { users, tokens, billing, quotes } from "@/lib/schema";
import { eq } from "drizzle-orm";
import { sendWelcomeEmail } from "@/services/send-email";

export async function POST(request: NextRequest) {
    const CLERK_WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;
    if (!CLERK_WEBHOOK_SECRET)
        return NextResponse.json(
            { message: "Missing CLERK_WEBHOOK_SECRET" },
            { status: 400 }
        );

    const headersPayload = await headers();
    const svixId = headersPayload.get("svix-id");
    const svixTime = headersPayload.get("svix-timestamp");
    const svixSignature = headersPayload.get("svix-signature");

    if (!svixId || !svixTime || !svixSignature)
        return NextResponse.json(
            { message: "Missing svix headers" },
            { status: 400 }
        );

    const payload = await request.json();
    const body = JSON.stringify(payload);

    const wh = new Webhook(CLERK_WEBHOOK_SECRET);
    let evt: WebhookEvent;

    try {
        evt = wh.verify(body, {
            "svix-id": svixId,
            "svix-timestamp": svixTime,
            "svix-signature": svixSignature,
        }) as WebhookEvent;
    } catch (error) {
        console.error("Webhook verification failed:", error);
        return NextResponse.json(
            { message: "Webhook verification failed" },
            { status: 400 }
        );
    }

    const eventType = evt.type;

    switch (eventType) {
        case "user.created":
            try {
                const {
                    id,
                    email_addresses,
                    primary_email_address_id,
                    first_name,
                    last_name,
                } = evt.data;

                const primaryEmail = email_addresses.find(
                    (email) => email.id === primary_email_address_id
                );

                if (!primaryEmail)
                    return NextResponse.json(
                        { message: "Missing primary email address" },
                        { status: 400 }
                    );

                const existingUser = await db
                    .select()
                    .from(users)
                    .where(eq(users.id, id))
                    .limit(1);

                if (existingUser.length > 0)
                    return NextResponse.json(
                        { message: "User already exists" },
                        { status: 200 }
                    );

                await db.insert(users).values({
                    id,
                    email: primaryEmail.email_address,
                    name: [first_name, last_name].filter(Boolean).join(" "),
                    isPro: false,
                });

                const emailResponse = await sendWelcomeEmail(
                    primaryEmail.email_address,
                    first_name ?? "User"
                );

                if (!emailResponse.success)
                    return NextResponse.json(
                        { message: "Failed to send welcome email" },
                        { status: 400 }
                    );

                return NextResponse.json("User created", { status: 200 });
            } catch (error) {
                console.error("Error creating user:", error);
                return NextResponse.json(
                    { message: "Error creating user" },
                    { status: 400 }
                );
            }

        case "user.deleted":
            try {
                const { id } = evt.data;

                if (!id)
                    return NextResponse.json(
                        { message: "Missing user ID" },
                        { status: 400 }
                    );

                const existingUser = await db
                    .select()
                    .from(users)
                    .where(eq(users.id, id))
                    .limit(1);

                if (existingUser.length === 0)
                    return NextResponse.json(
                        { message: "User not found" },
                        { status: 404 }
                    );

                await db.delete(tokens).where(eq(tokens.userId, id));
                await db.delete(billing).where(eq(billing.userId, id));
                await db.delete(quotes).where(eq(quotes.userId, id));
                await db.delete(users).where(eq(users.id, id));

                return NextResponse.json(
                    { message: "User deleted" },
                    { status: 200 }
                );
            } catch (error) {
                console.error("Error deleting user:", error);
                return NextResponse.json(
                    { message: "Error deleting user" },
                    { status: 400 }
                );
            }

        default:
            break;
    }

    return NextResponse.json({ message: "OK" }, { status: 200 });
}
