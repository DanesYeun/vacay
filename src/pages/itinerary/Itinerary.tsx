import { useState } from "react"
import Map from "../../components/Map"
import Timeline from "../../components/Timeline"
import days from '../../server/data/Days.json'
import itinerary from '../../server/data/Itinerary.json'

const Itenerary = () => {
    const [day, setDay] = useState<string>("0");

    let dayItinerary = itinerary.days[Number(day)]

    return(
        <div className="grid grid-flow-row md:grid-cols-3 gap-2 p-2">
            <div className="p-2 flex flex-col gap-2 order-2 md:order-1">
                <div className="flex items-center justify-center px-2">
                    <select 
                        className="select" 
                        id="day" 
                        value={day}
                        onChange={(e) => setDay(e.target.value)}
                    >
                        {days.map((day, index) => (
                            <option key={day.id} value={index}>{day.name}</option>
                        ))}
                    </select>
                </div>
                <Timeline dayItinerary={dayItinerary} activity={dayItinerary.activities}/>
            </div>

            <div className="col-span-2 order-1 md:order-2">
                <Map activity={dayItinerary.activities}/>
            </div>  
        </div>
    )
}

export default Itenerary