import { useState } from "react"
import Map from "../../components/Map"
import Timeline from "../../components/Timeline"
import days from '../../server/data/Days.json'
import itinerary from '../../server/data/Itinerary.json'

const Itenerary = () => {
    const [day, setDay] = useState<string>("0");

    let dayItinerary = itinerary.days[Number(day)]

    return(
        <div className="flex flex-col gap-2">
            <Map activity={dayItinerary.activities}/>
            <div className="flex items-center justify-center px-2 w-full h-full">
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
    )
}

export default Itenerary