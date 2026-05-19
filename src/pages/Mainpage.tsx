import Timeline from "../components/Timeline";
import Map from "../components/Map";
import Tabs from "../components/Tabs";

const Mainpage = () => {

    return (
        <>
            <div className="w-full h-full grid grid-flow-row md:grid-flow-col grid-cols-12 md:grid-rows-12 gap-2">
                <div className="p-2 row-span-12 col-span-12 md:col-span-4 order-2 md:order-1">
                    <Timeline />
                </div>
                <div className="row-span-12 md:row-span-2 col-span-12 md:col-span-8 order-3 md:order-2">
                    <Tabs />
                </div>
                <div className="p-2 row-span-12 md:row-span-10 col-span-12 md:col-span-8 order-1">
                    <Map />
                </div>
            </div>
        </>
    )
}

export default Mainpage