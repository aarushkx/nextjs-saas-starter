import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { tokens } from "@/lib/schema";
import { auth } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";

export const GET = async () => {
    const { userId } = await auth();

    if (!userId)
        return NextResponse.json(
            { message: "Missing user ID" },
            { status: 400 }
        );

    try {
        const userTokens = await db
            .select({ token: tokens.token })
            .from(tokens)
            .where(eq(tokens.userId, userId))
            .limit(1);

        const tokenCount = userTokens.length > 0 ? userTokens[0].token : 0;

        return NextResponse.json({ tokenCount }, { status: 200 });
    } catch (error) {
        return NextResponse.json(
            { message: "Error fetching token count" },
            { status: 500 }
        );
    }
};
