"use client";
import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import Link from 'next/link';
import 'leaflet/dist/leaflet.css';

// Cargar el componente MapContainer de forma dinámica solo en el cliente
const MapContainer = dynamic(() => import('react-leaflet').then((mod) => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then((mod) => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then((mod) => mod.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then((mod) => mod.Popup), { ssr: false });

export default function Home() {
  useEffect(() => {
    // Importar Leaflet solo en el cliente
    import('leaflet').then(L => {
      delete L.Icon.Default.prototype._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
        iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
        shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
      });
    });
  }, []);

  return (
    <main>
      <MapContainer center={[-33.693981, -71.214010]} zoom={20} style={{ height: '100vh', width: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
      <Link
        href="/dashboard/inicio"
        className="absolute bottom-10 right-10 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-400"
        prefetch={false}>
        Volver
      </Link>
    </main>
  );
}
