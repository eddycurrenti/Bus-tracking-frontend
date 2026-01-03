import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";

const SOCKET_URL = "https://bus-gps-backend.onrender.com";
const API_URL = "https://bus-gps-backend.onrender.com/active-buses";

export default function useBusSocket() {
  const [buses, setBuses] = useState({});
  const socketRef = useRef(null);

  // Initial REST fetch
  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        const map = {};
        data.forEach(bus => {
          map[bus.busId] = bus;
        });
        setBuses(map);
      })
      .catch(console.error);
  }, []);

  // Socket.IO live updates
  useEffect(() => {
    socketRef.current = io(SOCKET_URL, {
      transports: ["websocket"],
    });

    socketRef.current.on("connect", () => {
      console.log("🟢 Socket connected");
    });

    socketRef.current.on("busUpdate", (bus) => {
      setBuses(prev => ({
        ...prev,
        [bus.busId]: bus,
      }));
    });

    return () => socketRef.current.disconnect();
  }, []);

  return buses;
}
