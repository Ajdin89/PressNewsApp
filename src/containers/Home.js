import React from 'react';
import News from './layout/News';
import Aside from './layout/aside';

const Home = () => {
	return (
		<>
			<div className='main'>
				<News /> 
				<Aside />
			</div>
		</>
	);
};

export default Home;
