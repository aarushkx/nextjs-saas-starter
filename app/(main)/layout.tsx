import MainProvider from "@/providers/main-provider";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return <MainProvider>{children}</MainProvider>;
};

export default MainLayout;
