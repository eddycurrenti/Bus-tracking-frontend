export default function BusSidebar({ buses }) {
  return (
    <div className="sidebar">
      <h3>Active Buses - Route</h3>

      {Object.values(buses).map(bus => (
        <div key={bus.busId} className="bus-item">
          Bus Name :🚌 {bus.busId} , route : {bus.routeId}
        </div>
      ))}
    </div>
  );
}
