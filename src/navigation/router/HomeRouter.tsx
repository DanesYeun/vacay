import { Routes, Route } from "react-router-dom"
import { RoutePath } from "../config/RouteConfig";
import Home from "../../pages/home/Home";
import Itenerary from "../../pages/itinerary/Itinerary";
import Memories from "../../pages/memories/Memories";

const HomeRouter = () => {
    return (
        <Routes>
            <Route path={RoutePath.Home} element={<Home/>}/>
            <Route path={RoutePath.Itenerary} element={<Itenerary/>}/>
            <Route path={RoutePath.Memories} element={<Memories/>}/>
        </Routes>
    )
}

export default HomeRouter