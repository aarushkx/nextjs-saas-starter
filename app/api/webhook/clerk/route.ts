import { NextRequest, NextResponse } from "next/server";
import { Webhook } from "svix";
import { headers } from "next/headers";
import { WebhookEvent } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
import { users } from "@/lib/schema";
import { eq } from "drizzle-orm";

export async function POST(request: NextRequest) {
    const CLERK_WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;
    if (!CLERK_WEBHOOK_SECRET)
        return new NextResponse("Missing CLERK_WEBHOOK_SECRET", {
            status: 400,
        });

    const headersPayload = await headers();
    const svixId = headersPayload.get("svix-id");
    const svixTime = headersPayload.get("svix-timestamp");
    const svixSignature = headersPayload.get("svix-signature");

    if (!svixId || !svixTime || !svixSignature)
        return new NextResponse("Missing svix headers", { status: 400 });

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
        return new NextResponse("Webhook verification failed", { status: 400 });
    }

    const eventType = evt.type;

    // USER CREATED
    if (eventType === "user.created") {
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
                return new NextResponse("Missing primary email address", {
                    status: 400,
                });

            const existingUser = await db
                .select()
                .from(users)
                .where(eq(users.id, id))
                .limit(1);

            if (existingUser.length > 0)
                return new NextResponse("User already exists", { status: 200 });

            await db.insert(users).values({
                id,
                email: primaryEmail.email_address,
                name: [first_name, last_name].filter(Boolean).join(" "),
                isPro: false,
            });

            return new NextResponse("User created", { status: 200 });
        } catch (error) {
            console.error("Error creating user", error);
            return new NextResponse("Error creating user", { status: 400 });
        }
    }

    return new NextResponse("OK", { status: 200 });
}
