"use client";
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import 'leaflet/dist/leaflet.css';
import Link from "next/link"

// Cargar el componente MapContainer de forma dinámica solo en el cliente
const MapContainer = dynamic(() => import('react-leaflet').then((mod) => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then((mod) => mod.TileLayer), { ssr: false });
const Polyline = dynamic(() => import('react-leaflet').then((mod) => mod.Polyline), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then((mod) => mod.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then((mod) => mod.Popup), { ssr: false });

export default function Home() {
    const pathCoords = [
        // Punto inicial
        [-33.693981, -71.214010],
        // Avanzar 500 metros horizontalmente
        [-33.693981, -71.213510],
        // Girar y avanzar en otra dirección
        [-33.694481, -71.213510],
        // Avanzar 500 metros verticalmente
        [-33.694481, -71.214010],
    ];
    const initialPosition = [-33.693981, -71.214010]
    const finPosition = [-33.694481, -71.214010]
    return (
        <MapContainer center={[-33.693981, -71.214010]} zoom={20} style={{ height: '100vh', width: '100%', zIndex: '0' }}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {/* Dibujar el recorrido del tractor */}
            <Polyline positions={pathCoords} color="blue" />
            <Marker position={initialPosition}>
                <Popup>Inicio</Popup>
            </Marker>
            <Marker position={finPosition}>
                <Popup>Fin</Popup>
            </Marker>
            <Link
                href="/dashboard/inicio"
                className="absolute z-20 bottom-10 right-10 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-400"
                prefetch={false}>
                Volver
            </Link>
        </MapContainer>

    );
}