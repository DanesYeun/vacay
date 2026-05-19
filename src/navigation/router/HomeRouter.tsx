import { Routes, Route } from "react-router-dom"
import { RoutePath } from "../config/RouteConfig";
import Home from "../../pages/home/Home";
import Itenerary from "../../pages/itinerary/Itinerary";

const HomeRouter = () => {
    return (
        <Routes>
            <Route path={RoutePath.Home} element={<Home/>}/>
            <Route path={RoutePath.Itenerary} element={<Itenerary/>}/>
        </Routes>
    )
}

export default HomeRouter