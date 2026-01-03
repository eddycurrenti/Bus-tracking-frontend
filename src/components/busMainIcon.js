import L from "leaflet";
import busPng from "../assets/bus.png";

const busMainIcon = new L.Icon({
  iconUrl: busPng,
  iconSize: [36, 36],
  iconAnchor: [18, 18],
  popupAnchor: [0, -18],
});

export default busMainIcon;
