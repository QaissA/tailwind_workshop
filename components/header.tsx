import Actions from "./actions"
import Logo from "./logo"
import Navigation from "./navigation"

const Header = () => {
    return (
        <header className="h-16 border-b">
            <nav className="flex justify-between max-w-screen-xl mx-auto h-full items-center px-6">
                <Logo />
                <Navigation />
                <Actions />
            </nav>
        </header>
    )
}

export default Header