import React from 'react';
import Forecast from './Forecast';
import Banner from './Banner';

const index = () => {
	return (
		<div className="aside">
			<Forecast />
			<Banner />
		</div>
	);
};

export default index;
