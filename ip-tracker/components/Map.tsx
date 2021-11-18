import * as React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import * as L from "leaflet";

import marker from "../images/icon-location.svg";

import { styled } from "@mui/material/styles";

import Box from "@mui/material/Box";

const CustomBox = styled(Box)(({ theme }) => ({
  position: "fixed",
  top: 280,
  bottom: 0,
  left: 0,
  right: 0,
  zIndex: -1,
  "& .leaflet-container": {
    width: "100%",
    height: "100%",
  },
  "& .leaflet-control-container": {
    display: "none",
  },
  "& .leaflet-div-icon": {
    background: "transparent",
    border: "none",
  },
}));

const customIcon = new L.Icon({
  iconUrl: marker,
  iconRetinaUrl: marker,
  iconSize: new L.Point(40, 50),
  iconAnchor: undefined,
  popupAnchor: undefined,
  shadowUrl: undefined,
  shadowSize: undefined,
  className: "leaflet-div-icon",
});

interface FuncProps {
  lat: number;
  lon: number;
}

const Map = ({ lat, lon }: FuncProps): JSX.Element => {
  console.log(lat + " " + lon);
  const position: LatLngExpression = [lat, lon]; // Paris position

  return (
    <CustomBox>
      <MapContainer center={position} zoom={13}>
        <Marker key="key" position={position} icon={customIcon} />
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </CustomBox>
  );
};

export default Map;
