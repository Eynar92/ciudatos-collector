
export default function BuilderLayout({ children }: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <h1>BuilderLayout</h1>
            {children}
        </div>
    );
}