import React from 'react';
import './index.css'

const DetailLocation = ({ location }) => {
  if (!location) {
    return <div>Loading location details...</div>;
  }

  return (
    <div className="location-detail">
      <h2 className='location-name'>{location.name}</h2>
      <p className='location-info'>Type: {location.type}</p>
      <p className='location-info'>Dimension: {location.dimension}</p>
    </div>
  );
};

export default DetailLocation;
