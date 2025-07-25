"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="max-w-md w-full text-center">
                <div>
                    <div className="text-6xl font-bold text-muted-foreground mb-4">
                        404
                    </div>
                    <h1 className="text-2xl font-bold">Page Not Found</h1>
                </div>
                <div className="space-y-4">
                    <p className="text-muted-foreground">
                        The page you&apos;re looking for doesn&apos;t exist or has been
                        moved.
                    </p>
                    <Button asChild className="mt-2">
                        <Link href="/dashboard">Go to Dashboard</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
