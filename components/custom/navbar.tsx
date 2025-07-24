"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Menu, X } from "lucide-react";
import { APP_NAME } from "@/lib/constants";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const navItems = [
        { label: "Pricing", href: "/pricing" },
        { label: "Sign In", href: "/sign-in" },
        { label: "Sign Up", href: "/sign-up" },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full border-b shadow-xs z-50">
            <div className="container mx-auto flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
                <Link href="/" className="text-xl font-bold">
                    {APP_NAME}
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-2 sm:gap-4">
                    {navItems.map((item) => (
                        <Button
                            key={item.href}
                            size="sm"
                            variant="ghost"
                            asChild
                        >
                            <Link href={item.href}>{item.label}</Link>
                        </Button>
                    ))}
                </div>

                {/* Mobile Hamburger */}
                <div className="md:hidden">
                    <Popover open={open} onOpenChange={setOpen}>
                        <PopoverTrigger asChild>
                            <Button
                                size="icon"
                                variant="ghost"
                                onClick={() => setOpen(!open)}
                            >
                                {open ? <X /> : <Menu />}
                            </Button>
                        </PopoverTrigger>

                        <PopoverContent
                            align="end"
                            className="w-44 p-2 flex flex-col items-start gap-2"
                        >
                            {navItems.map((item) => (
                                <Button
                                    key={item.href}
                                    size="sm"
                                    variant="ghost"
                                    className="w-full justify-start"
                                    asChild
                                >
                                    <Link
                                        href={item.href}
                                        onClick={() => setOpen(false)}
                                    >
                                        {item.label}
                                    </Link>
                                </Button>
                            ))}
                        </PopoverContent>
                    </Popover>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
