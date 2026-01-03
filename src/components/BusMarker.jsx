import { Marker, Popup, CircleMarker } from "react-leaflet";
import busIcon from "./busMainIcon";

export default function BusMarker({ bus, history }) {
  if (!bus) return null;

  return (
    <>
      {/* {history.map((p, i) => (
  <CircleMarker
    key={i}
    center={[p.lat, p.lng]}
    radius={7}                // BIGGER
    pathOptions={{
      color: "#4f7cff",
      weight: 1,
      fillOpacity: 0.35,
    }}
  />
))} */}

{history.map((p, i) => {
  const alpha = (i + 1) / history.length; // fade
  return (
    <CircleMarker
  center={[bus.lat, bus.lng]}
  radius={14}
  pathOptions={{
    color: "#4f7cff",
    weight: 1,
    fillOpacity: 0.12,
  }}
/>

  );
})}

      <Marker position={[bus.lat, bus.lng]} icon={busIcon}>
        <Popup>
          <b>Bus:</b> {bus.busId}<br />
          <b>Route:</b> {bus.routeId}
        </Popup>
      </Marker>
    </>
  );
}
