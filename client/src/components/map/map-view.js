import React from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import NewBikeMarker from "../new-bike-marker";

const MapView = props => (
  <Map
    center={[50, 10]}
    zoom={6}
    maxZoom={10}
    attributionControl={true}
    zoomControl={true}
    doubleClickZoom={true}
    scrollWheelZoom={true}
    dragging={true}
    animate={true}
    easeLinearity={0.35}
    onClick={props.onMapClickHandler}
  >
    <TileLayer url="https://{s}.tile.osm.org/{z}/{x}/{y}.png" />
    {props.bikes.map(bike => (
      <Marker
        key={bike._id}
        position={[bike.stolenFrom.location.lat, bike.stolenFrom.location.lon]}
      >
        <Popup>
          <b>{bike.title}</b>
          <p>{bike.description}</p>
          <p>Stolen from: {bike.stolenFrom.place}</p>
        </Popup>
      </Marker>
    ))}
    {props.newBikeMarker && (
      <NewBikeMarker
        position={props.newBikeMarker.position}
        onNewBikeCreated={props.onNewBikeCreated}
      />
    )}
  </Map>
);

export default MapView;
