"use client";

import { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

const TokensPage = () => {
    const { user } = useUser();

    const [tokenCount, setTokenCount] = useState<number | null>(null);
    const [isPro, setIsPro] = useState<boolean | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchTokens = async () => {
            try {
                const response = await fetch("/api/user/tokens/count");

                if (!response.ok) throw new Error("Failed to fetch tokens");

                const data = await response.json();
                setTokenCount(data.tokenCount);
            } catch (error) {
                toast.error("Failed to fetch tokens");
                setTokenCount(null);
            }
        };

        fetchTokens();
    }, []);

    useEffect(() => {
        const fetchUserPlan = async () => {
            if (!user?.id) return;

            try {
                const response = await fetch(
                    `/api/user/check-pro?userId=${user.id}`
                );
                if (!response.ok)
                    throw new Error("Failed to fetch user plan status");

                const data = await response.json();
                setIsPro(data.isPro);
            } catch (error) {
                toast.error("Failed to fetch user plan status");
                setIsPro(null);
            }
        };

        fetchUserPlan();
    }, [user?.id]);

    useEffect(() => {
        if (tokenCount !== null && isPro !== null) {
            setIsLoading(false);
        }
    }, [tokenCount, isPro]);

    const planText = isPro ? "Pro" : "Free";
    const tokensDisplay = tokenCount === 999 ? "unlimited" : tokenCount;

    return (
        <>
            <h1 className="font-semibold text-2xl">Tokens</h1>
            {isLoading ? (
                <div className="flex items-center text-muted-foreground text-sm mt-2">
                    <Loader2 className="w-3 h-3 animate-spin mr-1" />
                    <span>Loading...</span>
                </div>
            ) : (
                <p className="text-muted-foreground text-sm mt-2">
                    You are currently on the {planText} plan and you have{" "}
                    {tokensDisplay} tokens.
                </p>
            )}
        </>
    );
};

export default TokensPage;
