import { ThemeSwitcher, UserAvatar } from "."


export const Navbar = () => {
    return (
        <nav className="flex items-center justify-between h-[68px] px-4 mx-auto border-b border-secondary shadow-md">
            <h1 className="text-primary text-lg sm:text-3xl font-black">Ciudatos Collector</h1>
            <div className="flex items-center gap-4 px-4 py-2">
                <ThemeSwitcher />
                <UserAvatar />
            </div>
        </nav>
    )
}
