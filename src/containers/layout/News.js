import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Container from '../shared/Container';
import Spinner from '../shared/Spinner';
import NewsItems from './NewsItems';
import Dropdown from './Dropdown';
import Pagination from './Pagination';

const categories = [
	'regional',
	'technology',
	'lifestyle',
	'business',
	'general',
	'programming',
	'science',
	'entertainment',
	'world',
	'sports',
	'finance',
	'academia',
	'politics',
	'health',
	'opinion',
	'food',
	'game',
];

const API = {
	baseURL: 'https://api.currentsapi.services/v1/',
	key: 'j5_Z8aEzjaBRi9SgMfD5mFFIBV-fWKqynrLEvpn8nJhZV-Cv',
};

const News = ({ setNewsDetails }) => {
	const [items, setItems] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [current, setCurrent] = useState(1);
	const take = 6;

	useEffect(() => {
		const fetchNews = async () => {
			const response = await axios.get(
				`${API.baseURL}latest-news?apiKey=${API.key}`
			);

			setItems(response.data.news);
			setIsLoading(false);
		};
		fetchNews();
	}, []);

	const fetchByCategory = async (category) => {
		setIsLoading(true);
		const response = await axios.get(
			`${API.baseURL}search?&category=${category}&language=en&apiKey=${API.key}`
		);

		setItems(response.data.news);
		setIsLoading(false);
	};

	return (
		<>
			<Container>
				<Dropdown items={categories} onClick={fetchByCategory} />
				<h6 className='title'>Latest News</h6>
				<div className='showcase'>
					{isLoading ? (
						<Spinner />
					) : (
						items
							.slice((current - 1) * take, take * current)
							.map((news, id) => (
								<div key={id} onClick={() => setNewsDetails(news)}>
									<NewsItems  news={news} />
								</div>
							))
					)}
				</div>
				<Pagination
					current={current}
					selectPage={(p) => setCurrent(p)}
					total={items.length}
					take={take}
				/>
			</Container>
		</>
	);
};

export default News;
