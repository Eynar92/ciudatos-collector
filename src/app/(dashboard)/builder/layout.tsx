import { Navbar } from "@/components/builder";

export default function BuilderLayout({ children }: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Navbar />
            {children}
        </>
    );
}