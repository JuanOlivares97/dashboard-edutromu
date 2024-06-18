"use client"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useEffect } from 'react';
import Link from 'next/link';
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

export default function Home() {
    useEffect(() => {
        import('leaflet/dist/leaflet.css');
      }, []);
    
    return (
        <main>
        <MapContainer center={[-33.693981, -71.214010]} zoom={20} style={{ height: '100vh', width: '100%', zIndex: -1 }}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
        <Link
            href="/dashboard/inicio"
            className="absolute bottom-10 right-10 z-10 bg-blue-500 text-zinc-50 px-4 py-2 rounded-md hover:bg-blue-400"
            prefetch={false}>
            Volver
          </Link>
        </main>
      );
}
