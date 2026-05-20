import memories from '../server/data/Memories.json';

const MemoryLane = ({}) => {

    return (
        <div className="min-h-screen bg-white rounded shadow-lg p-6">
            <ul className="timeline timeline-vertical timeline-compact p-2">

                {memories.map((trip, index) => (
                <li key={trip.date} className="relative">

                    {index !== 0 && <hr className="bg-primary" />}

                    <div className="timeline-start text-left text-xl font-bold opacity-60">
                        <strong>{trip.date}</strong>
                    </div>

                    <div className="timeline-middle m-1">
                        <div className="h-3 w-3 rounded-full bg-primary"></div>
                    </div>

                    <div className="timeline-end w-full shadow-lg rounded">
                        <div className="carousel w-full rounded-t-box">

                        {trip.pictures.map((img, i) => (
                            <div key={i} className="carousel-item w-full md:w-auto">
                            <img
                                src={`${import.meta.env.BASE_URL}${img}`}
                                className="h-72 w-full object-cover"
                            />
                            </div>
                        ))}

                        </div>

                        <div className="card-body">
                            <h2 className="card-title">{trip.title}</h2>

                            <p className="text-base-content/70">
                                {trip.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-2">
                                {trip.tags.map((tag, i) => (
                                    <div key={i} className="badge badge-soft badge-secondary">{tag}</div>
                                ))}
                                
                            </div>
                        </div>
                    </div>

                    {index !== memories.length - 1 && (
                    <hr className="bg-primary" />
                    )}

                </li>
                ))}

            </ul>
        </div>
    );
};

export default MemoryLane;