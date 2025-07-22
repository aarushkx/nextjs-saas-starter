import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/custom/navbar";

const LandingPage = () => {
    return (
        <div>
            <div className="flex items-center justify-center">
                <Navbar />
            </div>
            <h1 className="flex items-center justify-center mt-24 font-bold text-3xl">
                Landing Page
            </h1>
            <div className="flex items-center justify-center mt-6 space-x-4">
                <Button asChild>
                    <Link href="/sign-up">Get Started</Link>
                </Button>
                <Button asChild variant="outline">
                    <Link href="/sign-in">Sign In</Link>
                </Button>
            </div>

            {/* TODO: This is only for testing */}
            <div className="flex items-center justify-center mt-6">
                <Button asChild variant="link">
                    <Link href="/home">Home (Testing)</Link>
                </Button>
            </div>
        </div>
    );
};

export default LandingPage;
