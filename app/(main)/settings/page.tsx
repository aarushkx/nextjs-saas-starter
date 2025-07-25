"use client";

import ThemeToggle from "@/app/_components/theme-toggle";

const SettingsPage = () => {
    return (
        <>
            <h1 className="font-semibold text-2xl mb-4">Settings</h1>
            <div className="max-w-3xl">
                <div className="border rounded-md p-4">
                    <div className="flex items-center justify-between">
                        <span className="text-lg font-medium">Theme</span>
                        <ThemeToggle variant="outline" />
                    </div>
                    <p className="text-muted-foreground text-sm mt-0.5">
                        Choose your preferred theme: Light, Dark, or System
                        (matches your device settings).
                    </p>
                </div>
            </div>
        </>
    );
};

export default SettingsPage;
