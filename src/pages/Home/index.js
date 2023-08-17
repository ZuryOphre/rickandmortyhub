import React, { useEffect, useState } from 'react';
import CharacterList from '../../components/CharacterList';
import LocationList from '../../components/LocationList';
import EpisodeList from '../../components/EpisodeList';
import {
  fetchAllCharacters,
  fetchAllLocations,
  fetchAllEpisodes,
} from '../../api/RickAndMortyApi';
import './index.css';

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [locations, setLocations] = useState([]);
  const [episodes, setEpisodes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const characterData = await fetchAllCharacters();
        setCharacters(characterData);

        const locationData = await fetchAllLocations(1);
        setLocations(locationData);

        const episodeData = await fetchAllEpisodes(1);
        setEpisodes(episodeData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const filteredLocations = locations.filter((location) =>
    location.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredEpisodes = episodes.filter((episode) =>
    episode.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };



  return (
    <div className="home">
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className="list-wrapper">
        <div className="list-container">
          <h1 className="list-title">Characters</h1>
          <CharacterList searchTerm={searchTerm} characters={characters} />
        </div>
        <div className="list-container">
          <h1 className="list-title">Locations</h1>
          <LocationList searchTerm={searchTerm} locations={locations} />
        </div>
        <div className="list-container">
          <h1 className="list-title">Episodes</h1>
          <EpisodeList searchTerm={searchTerm} episodes={filteredEpisodes} />
        </div>
      </div>
    </div>
  );  
};

export default Home;
