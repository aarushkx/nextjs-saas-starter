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
    Loader2,
    Settings,
    Sparkles,
    LayoutDashboard,
} from "lucide-react";
import { UserButton, useUser } from "@clerk/nextjs";
import { APP_NAME } from "@/lib/constants";
import { toast } from "sonner";

const items = [
    {
        title: "Dashboard",
        href: "/dashboard",
        icon: LayoutDashboard,
    },
    {
        title: "Tokens",
        href: "/tokens",
        icon: Sparkles,
    },
    {
        title: "Plans",
        href: "/plans",
        icon: CreditCard,
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
                    <SidebarGroupLabel className="text-lg py-8">
                        <Link href="/">{APP_NAME}</Link>
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
                                        <div className="flex items-center text-muted-foreground text-sm mt-2">
                                            <Loader2 className="w-3 h-3 animate-spin mr-1" />
                                            <span>Loading...</span>
                                        </div>
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
