import React, { useEffect, useState } from 'react';
import DetailLocation from '../DetailLocation';

const LocationList = ({ searchTerm, locations }) => {
  const [filteredLocations, setFilteredLocations] = useState(locations);

  useEffect(() => {
    const locationFilter = locations.filter((location) =>
      location.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredLocations(locationFilter);
  }, [locations, searchTerm]);

  return (
    <div className="list">
      {filteredLocations.map((location) => (
        <DetailLocation key={location.id} location={location} />
      ))}
    </div>
  );
};

export default LocationList;
