import React from 'react';
import DetailEpisode from '../DetailEpisode';

const EpisodeList = ({ episodes }) => (
  <div className="list">
    {episodes.map((episode) => (
      <DetailEpisode key={episode.id} episode={episode} />
    ))}
  </div>
);

export default EpisodeList;
