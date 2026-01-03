// export default function TopBar({ count }) {
//   return (
//     <div className="topbar">
//       <div>Live Bus Tracking  [ {count} ]</div>
  
//     </div>
//   );
// }

export default function TopBar({ count }) {
  return (
    <div className="topbar">
      <div className="topbar-left">
        <span className="topbar-icon">🚌</span>
        <span className="topbar-title">Live Bus Tracking</span>

        <span className="topbar-live">
          <span className="pulse-dot" />
          LIVE
        </span>
      </div>

      <div className="topbar-right">
        <span className="count-badge">{count}</span>
      </div>
    </div>
  );
}
