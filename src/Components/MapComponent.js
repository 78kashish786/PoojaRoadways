// src/MapComponent.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import {L} from 'leaflet'
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet'
// Fix for marker icon not showing
// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//     iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png').default,
//     iconUrl: require('../Assets/marker.png').default,
//     shadowUrl: require('leaflet/dist/images/marker-shadow.png').default,
//   });

const center = [30.3955286, 76.8140563]; // Replace with your latitude and longitude

function MapComponent() {
  return (
    <MapContainer className='w-[100%] h-full z-10   ' center={center} zoom={16} style={{ height: "600px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={center}>
        <Popup>
          Pooja Roadways <br /> Ambala City.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default MapComponent;
