import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Location } from "@/data/locations";

export function LocationMap({ location }: { location: Location }) {
  const mapElement = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapElement.current) return;

    const map = L.map(mapElement.current, {
      center: location.center,
      zoom: location.zoom,
      scrollWheelZoom: true,
      zoomControl: true,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 19,
    }).addTo(map);

    location.pins.forEach((pin) => {
      L.circleMarker([pin.lat, pin.lng], {
        radius: 8,
        color: "#ffffff",
        weight: 2,
        fillColor: "#2645e0",
        fillOpacity: 1,
      })
        .addTo(map)
        .bindTooltip(pin.label, {
          permanent: true,
          direction: "top",
          offset: [0, -8],
          className: "dtv-map-label",
        });
    });

    return () => map.remove();
  }, [location]);

  return <div ref={mapElement} className="dtv-map h-full min-h-[460px] w-full" aria-label={`${location.city} completed installation map`} />;
}