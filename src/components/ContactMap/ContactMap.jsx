import React from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import { mapStyles } from "./MapStyles";
import { ContactMapContainer } from "./ContactMap.style";

const containerStyle = {
  width: "100%",
  height: "520px",
};

const center = {
  // ubicacion
  // lat: -12.039349,
  // lng: -77.085387,
  lat: -12.039349,
  lng: -72.085387,
};

const options = {
  styles: mapStyles,
};

const ContactMap = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading maps";

  return (
    <>
      <ContactMapContainer>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={6}
          options={options}
        ></GoogleMap>
      </ContactMapContainer>
    </>
  );
};

export default ContactMap;
