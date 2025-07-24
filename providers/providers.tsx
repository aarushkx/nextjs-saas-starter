"use client";

import React from "react";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "./theme-provider";
import { shadcn } from "@clerk/themes";

const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <ClerkProvider
            appearance={{
                baseTheme: shadcn,
                layout: {
                    socialButtonsPlacement: "bottom",
                    socialButtonsVariant: "blockButton",
                    termsPageUrl: "https://clerk.com/terms", // Change to your terms page URL (optional)
                    privacyPageUrl: "https://clerk.com/privacy", // Change to your privacy page URL (optional)
                },
            }}
        >
            <ThemeProvider
                attribute="class"
                defaultTheme="light"
                enableSystem
                disableTransitionOnChange
            >
                <main>{children}</main>
                <Toaster />
            </ThemeProvider>
        </ClerkProvider>
    );
};

export default Providers;
