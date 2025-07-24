import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
import { tokens, users } from "@/lib/schema";
import { eq } from "drizzle-orm";

export const POST = async () => {
    const { userId } = await auth();

    if (!userId)
        return NextResponse.json(
            { message: "Missing user ID" },
            { status: 400 }
        );

    try {
        const { has } = await auth();
        const hasProPlan = has({ plan: "pro" });

        const userData = await db
            .select({ isPro: users.isPro })
            .from(users)
            .where(eq(users.id, userId))
            .limit(1);

        if (userData.length === 0) {
            return NextResponse.json(
                { error: "User not found in DB" },
                { status: 404 }
            );
        }

        const currentIsPro = userData[0].isPro;

        if (currentIsPro !== hasProPlan) {
            await db
                .update(users)
                .set({ isPro: hasProPlan })
                .where(eq(users.id, userId));

            await db
                .update(tokens)
                .set({ token: 999 })
                .where(eq(tokens.userId, userId));
        }

        return NextResponse.json(
            { message: "Plan synced", isPro: hasProPlan },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            { error: "Error syncing plan" },
            { status: 500 }
        );
    }
};
