import React from 'react';

const LocationMap = () => {
  return (
    <div>
      <h4>Location Map</h4>
      <div className="map-container">
        <iframe src="https://your-map-url.com" frameborder="0" allowfullscreen></iframe>
      </div>
    </div>
  );
};

export default LocationMap;
