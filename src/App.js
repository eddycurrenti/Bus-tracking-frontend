import "./styles/layout.css";
import TopBar from "./components/TopBar";
import BusMap from "./components/BusMap";
import BusSidebar from "./components/BusSidebar";
import useBusSocket from "./hooks/useBusSocket";

export default function App() {
  const buses = useBusSocket();

  return (
    <div className="app-root">
      <TopBar count={Object.keys(buses).length} />
      <div className="map-wrapper">
        <BusMap buses={buses} />
      </div>
      <BusSidebar buses={buses} />
    </div>
  );
}
