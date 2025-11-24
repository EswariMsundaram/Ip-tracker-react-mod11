//import leaflet, create map only using useEffect(()=>{...}, []), update map center when data changes
// create map once, update view on state changes,
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import { useEffect } from 'react'

//Component to update map center when new coordinates arrive
function ChangeView({center}){
  const map=useMap()
  useEffect(()=>{
    map.setView(center)
  },[center])
  return null
}

function MapView({lat,lng}){
    const position=[lat,lng]

    return(
        <MapContainer 
          center={position} 
          zoom={13} 
          scrollWheelZoom={true}
          style={{height:"400px", width:"100%", marginTop:"20px"}}
        >
        
        <ChangeView center={position}/>

  <TileLayer
    attribution="&copy; OpenStreetMap Contributors"
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={position}>
    <Popup>
      IP Location
    </Popup>
  </Marker>
</MapContainer>
    )

}

export default MapView


