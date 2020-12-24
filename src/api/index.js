import axios from 'axios';

const API = {
	baseURL: 'https://api.currentsapi.services/v1/',
	key: 'j5_Z8aEzjaBRi9SgMfD5mFFIBV-fWKqynrLEvpn8nJhZV-Cv',
};

export const fetchNewsAPI = async () => {
	const response = await axios.get(`${API.baseURL}latest-news?language=us&apiKey=${API.key}`);
	return response.data;
};
