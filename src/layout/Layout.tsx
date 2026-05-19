import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";

interface Props {
    children?: React.ReactNode;
}

const Layout = ({children}: Props) => {
    const location = useLocation();
    const isHomepage = location.pathname === '/';

    return (
        <div className="w-screen h-screen flex flex-col overflow-hidden bg-stone-100 text-black">
            {/* Header */}
            <header
                className={`text-white text-center bg-transparent ${isHomepage ? " absolute top-0 left-0 right-0 z-20" : ""}`}
            >
                <Navbar />
            </header>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto">
                {children} {/* This is where the pages will be rendered */}
            </main>
        </div>
    )
}

export default Layout