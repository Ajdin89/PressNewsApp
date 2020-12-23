import React from 'react';
import banner from '../../../images/banner.jpg';

const Banner = () => {
	return (
		<div className='banner-box'>
			<h2>Banner</h2>
				<img src={banner} alt='banner' />
		</div>
	);
};

export default Banner;
