import { Link } from "react-router-dom";
import { RoutePath } from "../navigation/config/RouteConfig";

const Navbar = () => {
     return (
        <div className="navbar bg-transparent">
            <div className="flex-1 text-start">
                <code>
                    <Link to={RoutePath.Home} className="btn btn-ghost hover:bg-transparent text-primary hover:font-bold uppercase">
                        {/* <div className="avatar">
                            <div className="w-8 rounded">
                                <img
                                src={picture}
                                alt="avatar" />
                            </div>
                        </div> */}
                        <span className="hidden md:block text-black">Ysa & Danes' Travel Album</span>
                    </Link>
                </code>
            </div>
            <div className="flex-none">
                <code>
                    <ul className="menu menu-horizontal px-1 md:px-8">
                        <li><Link to={RoutePath.Itenerary} className="text-black hover:text-black text-lg uppercase">Where to?</Link></li>
                        {/* <li><Link to={RoutePath.HIRE_ME} className="text-black hover:text-black text-lg uppercase">Hire Me</Link></li> */}
                    </ul>
                </code>
            </div>
        </div>
    )
}

export default Navbar