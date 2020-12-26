import React, { useState } from 'react';
import Aside from '../layout/aside';
import News from '../layout/News';
import NewsDetails from '../layout/NewsDetails';

const Home = () => {
	const [newsDetails, setNewsDetails] = useState(null);

	return (
		<>
			<div className='main'>
				{!newsDetails ? (
					<News setNewsDetails={(news) => setNewsDetails(news)} />
				) : (
					<NewsDetails news={newsDetails} goBack={() => setNewsDetails(null)} />
				)}
				<Aside />
			</div>
		</>
	);
};

export default Home;
