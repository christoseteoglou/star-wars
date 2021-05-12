import axios from 'axios';

let URL = 'https://swapi.dev/api/people/';


const getCharacters = async (newUrl) => {
	try {
		if (newUrl) {
			URL = newUrl;
		}
		const response = await axios.get(URL)
		return response.data
		// console.log(response.data.results);
	} catch (error) {
		console.log(error);
	}
}

const getSingleCharacter = async (CHAR_URL) => {
	try {
		if (CHAR_URL) {
			const response = await axios.get(CHAR_URL)
			return response.data
		} else {
			console.log('ID is not here boss');
		}
	} catch (error) {
		console.log(error.message);
	}
}

const getHomeWorld = async (WORLD_URL) => {
	try {
		if (WORLD_URL) {
			const response = await axios.get(WORLD_URL)
			return response.data
		} else {
			console.log('ID is not here boss');
		}
	} catch (error) {
		console.log(error.message);
	}
}

const searchField = async (input) => {
	try {
		if (input) {
			let SEARCH_URL = URL + '?search=' + input
			const response = await axios.get(SEARCH_URL)
			return response.data
		}
	} catch (error) {
		console.log(error);
	}
}



export { getCharacters, getSingleCharacter, getHomeWorld, searchField}