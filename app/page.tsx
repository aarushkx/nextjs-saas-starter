"use client";

import Link from "next/link";
import { PricingTable } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import {
    Quote,
    Zap,
    ArrowRight,
    Star,
    Shield,
    Github,
    Layout,
    PanelLeft,
    Network,
    Rocket,
    Lock,
} from "lucide-react";
import Footer from "@/components/custom/footer";

const Icon = ({
    icon,
    alt,
    w,
    h,
}: {
    icon: string;
    alt: string;
    w?: string;
    h?: string;
}) => {
    return (
        <img
            src={`/icons/${icon}.svg`}
            alt={alt}
            style={{ width: w ? w : "24px", height: h ? h : "24px" }}
        />
    );
};

const features = [
    {
        icon: <Icon icon="nextjs" alt="Next.js" w="36px" h="36px" />,
        title: "Next.js",
        description: "The React Framework for Production.",
    },
    {
        icon: <Icon icon="typescript" alt="TypeScript" w="24px" h="24px" />,
        title: "TypeScript",
        description: "Typed JavaScript for better development.",
    },
    {
        icon: <Icon icon="neon" alt="Neon" />,
        title: "Neon",
        description: "Serverless Postgres database.",
    },
    {
        icon: <Icon icon="drizzle" alt="Drizzle" w="32px" h="32px" />,
        title: "Drizzle ORM",
        description: "Lightweight ORM for SQL databases.",
    },
    {
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    d="M12 15.13c1.73 0 3.12-1.4 3.12-3.13S13.72 8.88 12 8.88 8.87 10.28 8.87 12s1.4 3.13 3.13 3.13M15.35 17.12a.68.68 0 0 0-.79-.11c-.77.39-1.64.62-2.56.62s-1.79-.22-2.56-.62a.68.68 0 0 0-.79.11L6.37 19.4c-.27.27-.24.71.07.92 1.59 1.06 3.5 1.69 5.56 1.69s3.97-.62 5.56-1.69c.31-.21.34-.65.07-.92z"
                    className="b"
                ></path>
                <path
                    d="M12 2C6.48 2 2 6.48 2 12c0 2.06.62 3.97 1.69 5.56.21.31.65.34.92.07l2.28-2.28c.21-.21.24-.53.11-.79-.39-.77-.62-1.64-.62-2.56a5.63 5.63 0 0 1 5.63-5.63c.92 0 1.79.22 2.56.62.26.13.58.1.79-.11l2.28-2.28c.27-.27.24-.71-.07-.92a10 10 0 0 0-5.56-1.69Z"
                    className="b"
                ></path>
            </svg>
        ),
        title: "Clerk Auth",
        description: "User authentication and authorization.",
    },
    {
        icon: <Network className="w-6 h-6 text-primary" />,
        title: "Webhook",
        description: "Sync and connect with external services.",
    },
    {
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
            >
                <path d="m16.24,13.9c.93-.51,1.65-1.22,2.19-2.11.53-.91.8-1.93.8-3.06s-.27-2.07-.8-2.93c-.53-.87-1.27-1.56-2.21-2.06-.93-.5-1.96-.75-3.11-.75H5v18h4.17v-6.33h2.25l3.56,6.33h4.99l-4.03-6.94c.1-.05.2-.1.3-.16Zm-1.59-3.7c-.17.36-.43.64-.77.85-.33.19-.71.28-1.16.28h-3.55v-4.68h3.16c.55,0,1.01.09,1.39.28.39.19.69.46.9.82.21.34.31.75.31,1.21s-.09.87-.28,1.23Z"></path>
            </svg>
        ),
        title: "Resend",
        description: "Integrated email service.",
    },
    {
        icon: <Icon icon="gemini" alt="Gemini" />,
        title: "Google Gemini",
        description: "Ready for intelligent features.",
    },
    {
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    d="M12 15.13c1.73 0 3.12-1.4 3.12-3.13S13.72 8.88 12 8.88 8.87 10.28 8.87 12s1.4 3.13 3.13 3.13M15.35 17.12a.68.68 0 0 0-.79-.11c-.77.39-1.64.62-2.56.62s-1.79-.22-2.56-.62a.68.68 0 0 0-.79.11L6.37 19.4c-.27.27-.24.71.07.92 1.59 1.06 3.5 1.69 5.56 1.69s3.97-.62 5.56-1.69c.31-.21.34-.65.07-.92z"
                    className="b"
                ></path>
                <path
                    d="M12 2C6.48 2 2 6.48 2 12c0 2.06.62 3.97 1.69 5.56.21.31.65.34.92.07l2.28-2.28c.21-.21.24-.53.11-.79-.39-.77-.62-1.64-.62-2.56a5.63 5.63 0 0 1 5.63-5.63c.92 0 1.79.22 2.56.62.26.13.58.1.79-.11l2.28-2.28c.27-.27.24-.71-.07-.92a10 10 0 0 0-5.56-1.69Z"
                    className="b"
                ></path>
            </svg>
        ),
        title: "Clerk Billing",
        description: "Billing and subscription management.",
    },
    {
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    d="m19.01 11.55-7.46 7.46c-.46.46-.46 1.19 0 1.65a1.16 1.16 0 0 0 1.64 0l7.46-7.46c.46-.46.46-1.19 0-1.65s-1.19-.46-1.65 0ZM19.17 3.34c-.46-.46-1.19-.46-1.65 0L3.34 17.52c-.46.46-.46 1.19 0 1.65a1.16 1.16 0 0 0 1.64 0L19.16 4.99c.46-.46.46-1.19 0-1.65Z"
                    className="b"
                ></path>
            </svg>
        ),
        title: "Shadcn",
        description: "Beautiful UI components.",
    },
    {
        icon: <PanelLeft className="w-6 h-6 text-primary" />,
        title: "Sidebar",
        description: "Navigation sidebar layout.",
    },
    {
        icon: <Layout className="w-6 h-6 text-primary" />,
        title: "Landing Page",
        description: "Ready-to-use landing page.",
    },
];

const testimonials = [
    {
        name: "Alex Johnson",
        role: "Indie Developer",
        quote: "Honestly didn’t expect it to be this smooth. The built-in tools saved me a ton of boilerplate, and the project structure made everything feel intuitive right from the start.",
        avatar: (
            <img
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuJTIwYXZhdGFyfGVufDB8fDB8fHww"
                alt="AJ"
            />
        ),
        rating: 5,
    },
    {
        name: "Sarah Lee",
        role: "Startup Founder",
        quote: "It gave us a head start on our MVP. Clerk auth and billing were already wired in, which meant we could focus on building our actual product instead of reinventing basic infrastructure.",
        avatar: (
            <img
                src="https://images.unsplash.com/photo-1616325629936-99a9013c29c6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGFzaWFuJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D"
                alt="SL"
            />
        ),
        rating: 5,
    },
    {
        name: "Mike Chen",
        role: "Freelance Engineer",
        quote: "This saved me from setup hell. Everything just worked out of the box — I had my backend and UI running in no time. The stack felt modern but not overwhelming.",
        avatar: (
            <img
                src="https://images.unsplash.com/photo-1544168190-79c17527004f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXNpYW4lMjBndXl8ZW58MHx8MHx8fDA%3D"
                alt="MC"
            />
        ),
        rating: 5,
    },
];

const faqs = [
    {
        question: "What is included in the starter kit?",
        answer: "The kit includes a complete Next.js setup with TypeScript, NeonDB + Drizzle ORM, Clerk auth and billing, email integration with Resend, webhooks, sidebar layout, Google Gemini AI, and shadcn/ui components.",
    },
    {
        question: "Is it customizable?",
        answer: "Yes, everything is fully customizable. You can extend or modify any part to fit your specific needs.",
    },
    {
        question: "Can I use this even if I'm not building a SaaS?",
        answer: "Yes! While optimized for SaaS, it's a great base for any modern app with auth, DB, AI, and UI pre-configured.",
    },
    {
        question: "Can I use it for commercial projects?",
        answer: "Absolutely! The starter kit is licensed for both personal and commercial use.",
    },
];

const LandingPage = () => {
    return (
        <Container>
            <HeroSection />
            <FeaturesSection />
            <SocialProofSection />
            <TestimonialsSection />
            <PricingSection />
            <CTASection />
            <FAQSection />
            <Footer />
        </Container>
    );
};

const Container = ({ children }: { children: React.ReactNode }) => {
    return <div className="flex flex-col min-h-screen">{children}</div>;
};

const HeroSection = () => {
    return (
        <section className="py-24 lg:py-32">
            <div className="container px-4">
                <div className="flex flex-col items-center text-center space-y-8">
                    <Badge variant="secondary" className="px-4 py-2">
                        <Zap className="w-4 h-4" />
                        Everything You Need to Start
                    </Badge>

                    <div className="space-y-4 max-w-4xl">
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                            Kickstart Your SaaS in Minutes
                        </h1>
                        <p className="mx-auto max-w-2xl text-muted-foreground text-lg sm:text-xl">
                            A complete SaaS starter kit powered by Next.js,
                            TypeScript, and modern tools to launch your product
                            quickly and efficiently.
                        </p>
                    </div>

                    <div className="mx-auto max-w-md w-full grid gap-4 sm:grid-cols-2">
                        <Button size="lg" asChild className="group">
                            <Link href="/sign-up">
                                Start Building Now
                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </Button>
                        <Button
                            asChild
                            size="lg"
                            variant="outline"
                            className="group"
                        >
                            <a
                                href="https://github.com/aarushkx/nextjs-saas-starter"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2"
                            >
                                <Github className="h-4 w-4" />
                                Star on GitHub
                            </a>
                        </Button>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-8 pt-8">
                        <div className="flex flex-col items-center space-y-2">
                            <div className="text-3xl sm:text-4xl font-bold text-primary">
                                10+
                            </div>
                            <div className="text-sm text-muted-foreground">
                                Integrated Tools
                            </div>
                        </div>
                        <div className="flex flex-col items-center space-y-2">
                            <div className="text-3xl sm:text-4xl font-bold text-primary">
                                100%
                            </div>
                            <div className="text-sm text-muted-foreground">
                                TypeScript Coverage
                            </div>
                        </div>
                        <div className="flex flex-col items-center space-y-2">
                            <div className="text-3xl sm:text-4xl font-bold text-primary">
                                100%
                            </div>
                            <div className="text-sm text-muted-foreground">
                                Open Source
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const FeaturesSection = () => {
    return (
        <section id="features" className="py-24 bg-muted/50">
            <div className="container px-4 max-w-6xl mx-auto">
                <div className="space-y-4 mb-16 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        All the Tech You Actually Want
                    </h2>
                    <p className="mx-auto max-w-xl text-muted-foreground text-base sm:text-lg">
                        From UI to auth to to AI to billing, everything works
                        together smoothly so you can skip the boilerplate and
                        dive right in.
                    </p>
                </div>

                <div className="flex justify-center">
                    <div className="grid grid-cols-2 gap-x-6 gap-y-10">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="flex items-center space-x-4 max-w-md"
                            >
                                <div className="shrink-0 flex items-center justify-center w-12 h-12 text-primary">
                                    {feature.icon}
                                </div>
                                <div>
                                    <h3 className="text-sm sm:text-base md:text-lg font-semibold text-primary">
                                        {feature.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm text-muted-foreground leading-snug">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const SocialProofSection = () => {
    return (
        <section className="py-16 border-y">
            <div className="container px-4">
                <div className="text-center space-y-8">
                    <p className="text-muted-foreground font-medium">
                        Trusted by developers worldwide
                    </p>
                    <div className="flex items-center justify-center space-x-8 opacity-60">
                        <div className="flex items-center space-x-2">
                            <Rocket className="h-5 w-5" />
                            <span className="font-semibold">
                                Built for Speed
                            </span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Lock className="h-5 w-5" />
                            <span className="font-semibold">
                                Secure and Scalable
                            </span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Shield className="h-5 w-5" />
                            <span className="font-semibold">
                                Production Ready
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const TestimonialsSection = () => {
    return (
        <section id="testimonials" className="py-24">
            <div className="container px-4">
                <div className="text-center space-y-4 mb-16">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        Loved by Developers
                    </h2>
                    <p className="mx-auto max-w-2xl text-muted-foreground text-lg">
                        See what our community has to say.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <Card
                            key={index}
                            className="group hover:shadow-lg transition-all duration-300"
                        >
                            <CardContent className="pt-6 space-y-4">
                                <div className="flex space-x-1">
                                    {[...Array(testimonial.rating)].map(
                                        (_, i) => (
                                            <Star
                                                key={i}
                                                className="h-4 w-4 fill-primary text-primary"
                                            />
                                        )
                                    )}
                                </div>

                                <Quote className="h-8 w-8 text-muted-foreground/30" />
                                <p className="text-muted-foreground leading-relaxed">
                                    {testimonial.quote}
                                </p>

                                <div className="flex items-center space-x-3 pt-4">
                                    <div className="w-10 h-10 rounded-full overflow-hidden">
                                        {testimonial.avatar}
                                    </div>
                                    <div>
                                        <p className="font-semibold text-sm">
                                            {testimonial.name}
                                        </p>
                                        <p className="text-xs text-muted-foreground">
                                            {testimonial.role}
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

const PricingSection = () => {
    return (
        <section id="pricing" className="py-24 bg-muted/50">
            <div className="container px-4">
                <div className="text-center space-y-4 mb-16">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        Pick a Plan That Works Best for You
                    </h2>
                    <p className="mx-auto max-w-2xl text-muted-foreground text-lg">
                        Choose the plan that fits your needs. Built for
                        individuals and teams who value speed, clarity, and
                        control.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <PricingTable />
                </div>
            </div>
        </section>
    );
};

const CTASection = () => {
    return (
        <section className="py-24">
            <div className="container px-4">
                <Card className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10" />
                    <CardContent className="relative py-16 text-center space-y-6">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            Ready to Build Your SaaS?
                        </h2>
                        <p className="mx-auto max-w-2xl text-muted-foreground text-lg">
                            You bring the idea — this gives it structure, flow,
                            and momentum. Designed to handle the boring parts so
                            you can focus on progress. Start shipping with
                            clarity from the very first commit.
                        </p>

                        <div className="mx-auto max-w-md w-full grid gap-4 sm:grid-cols-2">
                            <Button size="lg" asChild className="w-full group">
                                <Link href="/sign-up">
                                    Start Your Journey Today
                                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </Button>
                            <Button
                                asChild
                                size="lg"
                                variant="outline"
                                className="w-full group"
                            >
                                <a
                                    href="https://github.com/aarushkx/nextjs-saas-starter"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2"
                                >
                                    <Github className="h-4 w-4" />
                                    Star on GitHub
                                </a>
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
};

const FAQSection = () => {
    return (
        <section id="faq" className="py-24 bg-muted/50">
            <div className="container px-4">
                <div className="text-center space-y-4 mb-16">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        Frequently Asked{" "}
                        <span className="text-primary">Questions</span>
                    </h2>
                    <p className="mx-auto max-w-2xl text-muted-foreground text-lg">
                        Got questions? We’ve got clear answers to help you get
                        started with confidence.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto">
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                                <AccordionTrigger className="text-left hover:no-underline py-6">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="pb-6 text-muted-foreground leading-relaxed">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
};

export default LandingPage;
