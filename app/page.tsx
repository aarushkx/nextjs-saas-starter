import React from "react";
import Link from "next/link";

const LandingPage = () => {
    return (
        <div>
            <h1 className="flex items-center justify-center mt-24 font-bold text-3xl">
                Landing Page
            </h1>
            <div className="flex items-center justify-center mt-6 space-x-4">
                <Link href="/sign-up">
                    <button className="px-4 py-2 cursor-pointer bg-gray-800 text-white hover:bg-gray-700 rounded-md font-semibold">
                        Get Started
                    </button>
                </Link>
                <Link href="/sign-in">
                    <button className="px-4 py-2 cursor-pointer text-black bg-gray-200 hover:bg-gray-300 rounded-md font-semibold">
                        Sign In
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default LandingPage;
