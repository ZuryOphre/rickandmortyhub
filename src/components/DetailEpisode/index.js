import React from 'react';
import './index.css';

const DetailEpisode = ({ episode }) => {
  if (!episode) {
    return <div>Loading episode details...</div>;
  }

  return (
    <div className="episode-detail">
      <h2 className="episode-name">{episode.name}</h2>
      <p className="episode-info">Episode: {episode.episode}</p>
      <p className="episode-info">Air date: {episode.air_date}</p>
    </div>
  );
};

export default DetailEpisode;
