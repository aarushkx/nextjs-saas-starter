"use client";

import { Separator } from "@/components/ui/separator";
import { APP_NAME } from "@/lib/constants";

const Footer = () => {
    const product = [
        { id: 1, href: "#features", text: "Features" },
        { id: 2, href: "#pricing", text: "Pricing" },
        { id: 3, href: "#", text: "Documentation" },
        { id: 4, href: "#", text: "Changelog" },
    ];

    const company = [
        { id: 1, href: "#", text: "About" },
        { id: 2, href: "#", text: "Blog" },
        { id: 3, href: "#", text: "Careers" },
        { id: 4, href: "#", text: "Contact" },
    ];

    const legal = [
        { id: 1, href: "#", text: "Privacy Policy" },
        { id: 2, href: "#", text: "Terms of Service" },
        { id: 3, href: "#", text: "Cookie Policy" },
    ];

    return (
        <footer className="border-t bg-background">
            <div className="container px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            {/* <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-primary-foreground font-bold text-sm">
                                {APP_NAME.charAt(0)}
                            </div> */}
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
                            {product.map((item) => (
                                <a
                                    key={item.id}
                                    href={item.href}
                                    className="hover:text-foreground transition-colors"
                                >
                                    {item.text}
                                </a>
                            ))}
                        </nav>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-semibold">Company</h4>
                        <nav className="flex flex-col space-y-2 text-sm text-muted-foreground">
                            {company.map((item) => (
                                <a
                                    key={item.id}
                                    href={item.href}
                                    className="hover:text-foreground transition-colors"
                                >
                                    {item.text}
                                </a>
                            ))}
                        </nav>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-semibold">Legal</h4>
                        <nav className="flex flex-col space-y-2 text-sm text-muted-foreground">
                            {legal.map((item) => (
                                <a
                                    key={item.id}
                                    href={item.href}
                                    className="hover:text-foreground transition-colors"
                                >
                                    {item.text}
                                </a>
                            ))}
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
