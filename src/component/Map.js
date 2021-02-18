import React from 'react';
import GoogleMapReact from 'google-map-react';

const Map = ({ latitude, longitude }) => {
 const renderMarkers = (map, maps) => {
  let marker = new maps.Marker({
  position: { lat: 24.9043, lng: 67.0817 },
  map,
  title: 'Hello World!'
  });
  return marker;
 };

 return (
   <div style={{ height: '25vh', width: '100%' }}>
    <GoogleMapReact
      bootstrapURLKeys={{ key: "AIzaSyC4Z5Qz97EWcoCczNn2IcYvaYG0L9pe6Rk" }}
      defaultCenter={{ lat: 24.9043, lng: 67.0817 }}
      defaultZoom={16}
      yesIWantToUseGoogleMapApiInternals
      onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
    >
    </GoogleMapReact>
   </div>
 );
};

export default Map;