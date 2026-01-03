import { useEffect, useState } from "react";

export default function useActiveBuses() {
  const [buses, setBuses] = useState([]);

  useEffect(() => {
    const fetchBuses = async () => {
      try {
        const res = await fetch(
          "https://bus-gps-backend.onrender.com/active-buses"
        );
        const data = await res.json();
        setBuses(data);
      } catch (err) {
        console.error("Fetch error:", err);
      }
    };

    fetchBuses();
    const interval = setInterval(fetchBuses, 3000); // every 3s

    return () => clearInterval(interval);
  }, []);

  return buses;
}
