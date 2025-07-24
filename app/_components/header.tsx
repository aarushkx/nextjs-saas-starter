"use client";

import { SidebarTrigger } from "@/components/ui/sidebar";

const Header = () => {
    return (
        <header className="flex items-center justify-between w-full border-b p-4">
            <SidebarTrigger />
        </header>
    );
};

export default Header;
