import React from 'react';
import './index.css';

const DetailCharacter = ({ character }) => {
  if (!character) {
    return <div>Loading character details...</div>;
  }

  return (
    <div className="character-detail">
      <h2 className="character-name">{character.name}</h2>
      <div className="character-image">
        <img src={character.image} alt={character.name} />
      </div>
      <p className="character-status">Status: {character.status}</p>
      <p className="character-species">Species: {character.species}</p>
    </div>
  );
};

export default DetailCharacter;

