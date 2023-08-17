const baseURL = 'https://rickandmortyapi.com/api/';

export const fetchCharacter = async (characterId) => {
  try {
    const response = await fetch(`${baseURL}character/${characterId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const fetchLocation = async (locationId) => {
  try {
    const response = await fetch(`${baseURL}location/${locationId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const fetchEpisode = async (episodeId) => {
  try {
    const response = await fetch(`${baseURL}episode/${episodeId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const fetchAllCharacters = async () => {
  let allCharacters = [];

  let response = await fetch(`${baseURL}character`)
    .then(async (response) => await response.json())
    .catch((err) => {
      console.error(err);
    });

  allCharacters = response.results;

  let next = response.info.next;
  while (next !== null) {
    const nextResponse = await fetch(next)
      .then(async (res) => await res.json())
      .catch((err) => console.error(err));
    allCharacters = [...allCharacters, ...nextResponse.results];
    next = nextResponse.info.next;
  }
  return allCharacters;
};

export const fetchAllLocations = async () => {
  let allLocations = [];

  let response = await fetch(`${baseURL}location`)
    .then(async (response) => await response.json())
    .catch((err) => {
      console.error(err);
    });
  allLocations = response.results;

  let next = response.info.next;

  while (next !== null) {
    const nextResponse = await fetch(next)
      .then(async (res) => await res.json())
      .catch((err) => console.error(err));
    allLocations = [...allLocations, ...nextResponse.results];
    next = nextResponse.info.next;
  }
  return allLocations;
};
export const fetchAllEpisodes = async () => {
  let allEpisodes = [];

  let response = await fetch(`${baseURL}episode`)
    .then(async (response) => await response.json())
    .catch((err) => {
      console.error(err);
    });

  allEpisodes = response.results;

  let next = response.info.next;

  while (next !== null) {
    const nextResponse = await fetch(next)
      .then(async (res) => await res.json())
      .catch((err) => console.error(err));
    allEpisodes = [...allEpisodes, ...nextResponse.results];
    next = nextResponse.info.next;
  }
  return allEpisodes;
};
