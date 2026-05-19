const Timeline = () => {

    const data = [
            {
                "id": 1,
                "activity": "Arrival at Mactan-Cebu Airport",
                "desc": "Grab a ride (~45 min to Cebu City proper, traffic-dependent)"
            },
            {
                "id": 2,
                "activity": "Check-in & snacks (interchangeable)",
                "desc": "Drop bags, freshen up. Grab merienda nearby — La Parisienne on Gorordo Ave is a great cozy café option."
            },
            {
                "id": 3,
                "activity": "Magellan's Cross & Basilica del Sto. Niño",
                "desc": "Quick heritage walk. Open until 6–7 PM. Good intro to Cebu history. Wear covered bottoms (no shorts)."
            },
            {
                "id": 4,
                "activity": "The Pig & Palm or local lechon",
                "desc": "The Pig & Palm (upscale, near IT Park) is excellent for first-night treat. Or try Rico's Lechon for the Cebu classic."
            },
            {
                "id": 5,
                "activity": "Ayala Center Cebu",
                "desc": "Stroll around, window shop, or grab coffee. Open until 9–10 PM. Good low-key first night activity."
            },
        
    ]
    
    return (
        <>
        <div className="h-full border rounded-lg">
            <div className="p-2 flex justify-center gap-4">
                <div className="flex justify-center items-center">
                    <div className="badge badge-soft badge-warning">Sept 4 · Thursday</div>
                </div>
                
                <div className="grid grid-flow-row">
                    <span className="font-bold">Arrival Day — City Intro</span>
                    <span className="text-sm">Light itinerary, settle in first</span>
                </div>
            </div> 

            <ul className="timeline timeline-vertical">
                {data.map((d, index) => 
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
                            index+1 !== data.length ? 
                                <hr className="bg-primary" /> 
                            : 
                                ''
                        }    
                    </li>
                )}
                      
            </ul>
        </div>
        </>
    )
}

export default Timeline