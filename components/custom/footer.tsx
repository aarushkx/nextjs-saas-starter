"use client";

import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { APP_NAME } from "@/lib/constants";

const Footer = () => {
    return (
        <footer className="border-t bg-background">
            <div className="container px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-primary-foreground font-bold text-sm">
                                {APP_NAME.charAt(0)}
                            </div>
                            <span className="font-bold text-xl">
                                {APP_NAME}
                            </span>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            The ultimate SaaS starter kit for modern developers
                            who want to ship faster and focus on what matters.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-semibold">Product</h4>
                        <nav className="flex flex-col space-y-2 text-sm text-muted-foreground">
                            <a
                                href="#features"
                                className="hover:text-foreground transition-colors"
                            >
                                Features
                            </a>
                            <a
                                href="#pricing"
                                className="hover:text-foreground transition-colors"
                            >
                                Pricing
                            </a>
                            <a
                                href="#"
                                className="hover:text-foreground transition-colors"
                            >
                                Documentation
                            </a>
                            <a
                                href="#"
                                className="hover:text-foreground transition-colors"
                            >
                                Changelog
                            </a>
                        </nav>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-semibold">Company</h4>
                        <nav className="flex flex-col space-y-2 text-sm text-muted-foreground">
                            <a
                                href="#"
                                className="hover:text-foreground transition-colors"
                            >
                                About
                            </a>
                            <a
                                href="#"
                                className="hover:text-foreground transition-colors"
                            >
                                Blog
                            </a>
                            <a
                                href="#"
                                className="hover:text-foreground transition-colors"
                            >
                                Careers
                            </a>
                            <a
                                href="#"
                                className="hover:text-foreground transition-colors"
                            >
                                Contact
                            </a>
                        </nav>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-semibold">Legal</h4>
                        <nav className="flex flex-col space-y-2 text-sm text-muted-foreground">
                            <Link
                                href="/privacy"
                                className="hover:text-foreground transition-colors"
                            >
                                Privacy Policy
                            </Link>
                            <Link
                                href="/terms"
                                className="hover:text-foreground transition-colors"
                            >
                                Terms of Service
                            </Link>
                            <a
                                href="#"
                                className="hover:text-foreground transition-colors"
                            >
                                Cookie Policy
                            </a>
                        </nav>
                    </div>
                </div>

                <Separator className="my-8" />

                <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
                    <p>
                        &copy; {new Date().getFullYear()} {APP_NAME}. All rights
                        reserved.
                    </p>
                    <p className="mt-2 sm:mt-0">Built with ❤️ for developers</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
