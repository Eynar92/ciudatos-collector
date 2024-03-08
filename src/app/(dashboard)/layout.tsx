import { Navbar } from "@/components/navbar";

export default function DashboardLayout({ children }: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Navbar />
            <main className="container py-4">
                {children}
            </main>
        </>
    );
}