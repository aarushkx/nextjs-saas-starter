import React from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/app/_components/app-sidebar";
import Header from "@/app/_components/header";

const MainProvider = ({ children }: { children: React.ReactNode }) => {
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
