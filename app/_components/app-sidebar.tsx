"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import {
    CreditCard,
    Home,
    Loader2,
    Quote,
    Settings,
    Sparkles,
    Wallet,
} from "lucide-react";
import { UserButton, useUser } from "@clerk/nextjs";
import { APP_NAME } from "@/lib/constants";
import { toast } from "sonner";

const items = [
    {
        title: "Home",
        href: "/home",
        icon: Home,
    },
    {
        title: "Quotes",
        href: "/quotes",
        icon: Quote,
    },
    {
        title: "Tokens",
        href: "/tokens",
        icon: Sparkles,
    },
    {
        title: "Billing",
        href: "/billing",
        icon: CreditCard,
    },
    {
        title: "Wallet",
        href: "/wallet",
        icon: Wallet,
    },
    {
        title: "Settings",
        href: "/settings",
        icon: Settings,
    },
];

const AppSidebar = () => {
    const { user } = useUser();

    const [isPro, setIsPro] = useState<boolean | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchUserPlan = async () => {
            if (!user?.id) return;

            try {
                setIsLoading(true);

                const response = await fetch(
                    `/api/user/check-pro?userId=${user.id}`
                );
                if (!response.ok)
                    throw new Error("Failed to fetch user plan status");

                const data = await response.json();
                setIsPro(data.isPro);
            } catch (error) {
                toast.error("Failed to fetch user plan status");
                setIsLoading(false);
            } finally {
                setIsLoading(false);
            }
        };

        fetchUserPlan();
    }, [user?.id]);

    return (
        <Sidebar collapsible="icon">
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel className="text-md py-8">
                        {APP_NAME}
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <Link href={item.href}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <Separator />
            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton className="flex items-center h-12 overflow-hidden group-data-[collapsible=icon]:justify-center">
                            <UserButton />
                            <div className="flex flex-col items-start group-data-[collapsible=icon]:hidden">
                                <span className="font-medium truncate max-w-[120px]">
                                    {user?.fullName ?? "Guest"}
                                </span>
                                <span
                                    className={`text-xs ${isPro ? "text-green-800 font-semibold" : "text-gray-500"}`}
                                >
                                    {isLoading ? (
                                        <>
                                            <Loader2 className="h-3 w-3 animate-spin inline mr-1" />
                                            Loading
                                        </>
                                    ) : isPro ? (
                                        "Pro"
                                    ) : (
                                        "Free"
                                    )}
                                </span>
                            </div>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    );
};

export default AppSidebar;
