import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { users } from "@/lib/schema";
import { eq } from "drizzle-orm";

export const GET = async (request: NextRequest) => {
    const searchParams = request.nextUrl.searchParams;
    const userId = searchParams.get("userId");

    if (!userId)
        return NextResponse.json({ message: "Missing user ID" }, { status: 400 });

    try {
        const userData = await db
            .select({ isPro: users.isPro })
            .from(users)
            .where(eq(users.id, userId))
            .limit(1);

        if (userData.length === 0)
            return NextResponse.json({ isPro: false }, { status: 200 });

        return NextResponse.json({ isPro: userData[0].isPro }, { status: 200 });
    } catch (error) {
        return NextResponse.json(
            { message: "Error fetching user plan status" },
            { status: 500 }
        );
    }
};
