"use client";

import React, { useEffect } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/app/_components/app-sidebar";
import Header from "@/app/_components/header";
import { toast } from "sonner";

const MainProvider = ({ children }: { children: React.ReactNode }) => {
    useEffect(() => {
        const syncPlanStatus = async () => {
            try {
                const response = await fetch("/api/status", { method: "POST" });
                if (!response.ok) throw new Error("Failed to sync plan status");
            } catch (error) {
                toast.error("Failed to sync plan status");
            }
        };

        syncPlanStatus();
    }, []);

    return (
        <SidebarProvider>
            <AppSidebar />
            <main className="w-full">
                <Header />
                <div className="p-10">{children}</div>
            </main>
        </SidebarProvider>
    );
};

export default MainProvider;
