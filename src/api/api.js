import axios from "axios";

let URL = "https://swapi.dev/api/people/";

const getCharacters = async (newUrl) => {
  try {
    if (newUrl) {
      URL = newUrl;
    }
    const response = await axios.get(URL);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const getPages = async (newUrl) => {
  newUrl = newUrl.slice(0, 4) + "s" + newUrl.slice(4);
  try {
    console.log(newUrl);
    if (newUrl) {
      URL = newUrl;
    }
    const response = await axios.get(URL);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};


const getSingleCharacter = async (CHAR_URL) => {
  CHAR_URL = CHAR_URL.slice(0, 4) + "s" + CHAR_URL.slice(4);
  try {
    if (CHAR_URL) {
      const response = await axios.get(CHAR_URL);
      return response.data;
    } else {
      console.log("Id is missing or unvalid");
    }
  } catch (error) {
    console.log(error.message);
  }
};
const getHomeworld = async (WORLD_URL) => {
  WORLD_URL = WORLD_URL.slice(0, 4) + "s" + WORLD_URL.slice(4);
  try {
    if (WORLD_URL) {
      const response = await axios.get(WORLD_URL);
      return response.data;
    } else {
      console.log("Id is missing or unvalid");
    }
  } catch (error) {
    console.log(error.message);
  }
};
const getSpecies = async (SPECIES_URL) => {
  
  try {
    if (SPECIES_URL) {
      const response = await axios.get(SPECIES_URL);
      console.log(response);
      return response.data;
    } else {
      console.log("Id is missing or unvalid");
    }
  } catch (error) {
    console.log(error.message);
  }
};

const getSearch = async (input) => {
  try {
    if (input) {
      let SEARCH_URL = URL + "?search=" + input;
      console.log(response);
      const response = await axios.get(SEARCH_URL);
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};
export {
  getCharacters,
  getSingleCharacter,
  getHomeworld,
  getSpecies,
  getSearch,
  getPages
};