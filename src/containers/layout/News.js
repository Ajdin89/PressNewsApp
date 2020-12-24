import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Container from '../shared/Container';
import Spinner from '../shared/Spinner';
import NewsItems from './NewsItems';

const API = {
	baseURL: 'https://api.currentsapi.services/v1/',
	key: 'j5_Z8aEzjaBRi9SgMfD5mFFIBV-fWKqynrLEvpn8nJhZV-Cv',
};

const News = () => {
	const [items, setItems] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchNews = async () => {
			const response = await axios.get(
				`${API.baseURL}latest-news?apiKey=${API.key}`
			);
			console.log(response.data.news);
			setItems(response.data.news);
			setIsLoading(false);
		};
		fetchNews();
	}, []);

	return (
		<>
			<Container>
				<h3 className='title'>Latest News</h3>
				<div className='showcase'>
					{isLoading ? (
						<Spinner />
					) : (
						items.slice(0, 6).map((news, id) => 
						<NewsItems key={id} news={news} />)
					)}
				</div>
			</Container>
		</>
	);
};

export default News;
