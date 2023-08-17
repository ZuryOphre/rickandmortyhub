import React, { useEffect, useState } from 'react';
import DetailCharacter from '../DetailCharacter';

const CharacterList = ({ searchTerm, characters }) => {
  const [filteredCharacter, setFilteredCharacter] = useState(characters);

  useEffect(() => {
    const filtered = characters.filter((c) =>
      c.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCharacter(filtered);
  }, [characters, searchTerm]);

  return (
    <div>
      {filteredCharacter.map((character) => (
        <DetailCharacter key={character.id} character={character} />
      ))}
    </div>
  );
};

export default CharacterList;
