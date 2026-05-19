import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import type { Activity } from '../server/types/Itinerary.types';

type Props = {
    activity: Activity[]
}
const Map = ({activity}: Props) => {
    const position: [number, number] = [10.31323, 123.922523];

    return(
        <div className="h-[90vh] shadow-lg">
            <MapContainer 
                center={position} 
                zoom={12} 
                style={{ height: '100%', width: '100%' }} // Critical: must have height
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                
                {activity.flat().map((place) => (
                    <Marker
                    key={place.id}
                    position={place.position as [number, number]}
                    >
                    <Popup>
                        <strong>{place.activity}</strong>
                        <br />
                        {place.desc}
                    </Popup>
                    </Marker>
                ))}
            </MapContainer>
            
        </div>
    )
}

export default Map