import { MapContainer, TileLayer } from "react-leaflet";
import { useEffect, useRef, useState } from "react";
import "leaflet/dist/leaflet.css";
import BusMarker from "./BusMarker";

export default function BusMap({ buses }) {
  const mapRef = useRef(null);
  const [history, setHistory] = useState({});

  useEffect(() => {
    setHistory(prev => {
      const copy = { ...prev };
      Object.values(buses).forEach(bus => {
        copy[bus.busId] = [...(copy[bus.busId] || []), bus].slice(-10);
      });
      return copy;
    });
  }, [buses]);

  useEffect(() => {
    setTimeout(() => mapRef.current?.invalidateSize(), 200);
  }, []);

  return (
    <MapContainer
      center={[17.5, 74.0]}
      zoom={7}
      zoomControl={false}
      whenCreated={(map) => (mapRef.current = map)}
    >
      {/* <TileLayer
        attribution="© OpenStreetMap"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      /> */}

      <TileLayer
  url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
  attribution="© CARTO"
/>



      {Object.values(buses).map(bus => (
        <BusMarker
          key={bus.busId}
          bus={bus}
          history={history[bus.busId] || []}
        />
      ))}
    </MapContainer>
  );
}
