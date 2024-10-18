import React, { useEffect } from "react";
import L from "leaflet";

const Map = () => {
  useEffect(() => {
    const map = L.map("map").setView([12.9716, 77.5946], 13); // Initial location: Bangalore

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
    }).addTo(map);
  }, []);

  return <div id="map" style={{ height: "400px", width: "100%" }} />;
};

export default Map;
