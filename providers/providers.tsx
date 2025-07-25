"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "./theme-provider";
import { shadcn } from "@clerk/themes";
import Navbar from "@/components/custom/navbar";

const Providers = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();
    const navbarRoutes = ["/", "/pricing", "/sign-in", "/sign-up"];
    const showNavbar = navbarRoutes.includes(pathname);

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
                defaultTheme="dark"
                enableSystem
                disableTransitionOnChange
            >
                {showNavbar && (
                    <div className="mb-6">
                        <Navbar />
                    </div>
                )}
                <main>{children}</main>
                <Toaster />
            </ThemeProvider>
        </ClerkProvider>
    );
};

export default Providers;
