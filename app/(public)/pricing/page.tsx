"use client";

import Footer from "@/components/custom/footer";
import { PricingTable } from "@clerk/nextjs";

const PricingPage = () => {
    return (
        <>
            <div className="min-h-screen py-24 px-8">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold">Choose Your Plan</h1>
                        <p className="text-muted-foreground mt-2">
                            Choose the plan that fits your needs. Upgrade or
                            downgrade anytime.
                        </p>
                    </div>
                    <PricingTable />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default PricingPage;
