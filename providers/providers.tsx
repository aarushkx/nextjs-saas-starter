// "use client";

// import React from "react";
// import { ClerkProvider } from "@clerk/nextjs";
// import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
// import AppSidebar from "@/app/_components/app-sidebar";
// import { Toaster } from "@/components/ui/sonner";

// const Providers = ({ children }: { children: React.ReactNode }) => {
//     return (
//         <ClerkProvider>
//             <SidebarProvider>
//                 {/* <AppSidebar /> */}
//                 <main>
//                     {/* <SidebarTrigger /> */}
//                     {children}
//                 </main>
//                 <Toaster />
//             </SidebarProvider>
//         </ClerkProvider>
//     );
// };

// export default Providers;

"use client";

import React from "react";
import { usePathname } from "next/navigation"; // Import for path check
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";

const Providers = ({ children }: { children: React.ReactNode }) => {
    // const pathname = usePathname();
    // const excludedPaths = ["/", "/sign-in", "/sign-up"]; // No sidebar on these
    // const showSidebar = !excludedPaths.includes(pathname); // Safety check (though MainLayout handles main pages)

    return (
        <ClerkProvider>
            {/* Only render SidebarProvider if on main pages (redundant but safe if not using nested layout) */}
            {/* {showSidebar ? <main>{children}</main> : <main>{children}</main>} */}
            <main>{children}</main>
            <Toaster />
        </ClerkProvider>
    );
};

export default Providers;
