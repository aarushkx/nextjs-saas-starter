"use client";

import { PricingTable } from "@clerk/nextjs";

const PlansPage = () => {
    return (
        <div className="max-w-3xl">
            <h1 className="font-semibold text-2xl">Plans</h1>
            <p className="text-muted-foreground text-sm mt-2 mb-6">
                Start with our free tier or upgrade to Pro for unlimited AI
                tokens and premium features.
                <br />
                All plans include secure billing and easy upgrades.
            </p>
            <PricingTable />
        </div>
    );
};

export default PlansPage;
