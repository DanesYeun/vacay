import type {DayItinerary, Activity } from "../server/types/Itinerary.types"

type Props = {
    dayItinerary: DayItinerary,
    activity: Activity[]
}

const Timeline = ({dayItinerary, activity}: Props) => {
    
    const date = new Date(dayItinerary.date)

    const formatted = `${date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
    })} · ${date.toLocaleDateString("en-US", {
        weekday: "long",
    })}`

    return (
        <div className="p-2 shadow rounded bg-white">
            <div className="p-2 flex justify-center gap-4">
                <div className="flex justify-center items-center">
                    <div className="badge badge-soft badge-info">{formatted}</div>
                </div>
                
                <div className="grid grid-flow-row">
                    <span className="font-bold">{dayItinerary.theme}</span>
                    <span className="text-sm">Random bullshit go</span>
                </div>
            </div> 

            <ul className="timeline timeline-vertical">
                {activity.flat().map((d, index) => 
                    <li key={d.id}>
                        {
                            index !== 0 ? 
                                <hr className="bg-primary" /> 
                            : 
                                ''
                        }   
                        <div className={index % 2 === 0 ?"timeline-start timeline-box" : "timeline-end timeline-box"}>
                            <time className="font-bold">{d.activity}</time>
                            <div>
                                {d.desc}
                            </div>
                        </div>
                        <div className="timeline-middle">
                            <div className="m-1 h-2 w-2 rounded-full bg-primary"></div>
                        </div>
                        {
                            index+1 !== activity.length ? 
                                <hr className="bg-primary" /> 
                            : 
                                ''
                        }    
                    </li>
                )}
                      
            </ul>
        </div>
    )
}

export default Timeline