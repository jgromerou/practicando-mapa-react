import React from 'react';
import { info } from '../../db';
import { MapContainer, TileLayer } from 'react-leaflet';
import './mapview.css';

import MarkerMap from '../marker/MarkerMap';
function MapsView() {
  return (
    <>
      <h1>Mapa prueba : Obras Artisticas </h1>
      <MapContainer
        center={{ lat: '-26.819055909315612', lng: '-65.20303105336924' }}
        zoom={15}
        className="mapContainer"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {info?.map((obra) => {
          if (obra.publicado) {
            return (
              <MarkerMap
                lat={obra.lat}
                lng={obra.lng}
                nombre={obra.nombre}
                urlImagen={obra.urlImagen}
                descripcion={obra.descripcion}
                link={obra.link}
              />
            );
          }
        })}
      </MapContainer>
    </>
  );
}

export default MapsView;
