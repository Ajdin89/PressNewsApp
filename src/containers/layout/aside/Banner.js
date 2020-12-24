import React from 'react';
import banner from '../../../images/banner.jpg';

const Banner = () => {
	return (
		<>
			<h2>Banner</h2>
			<div className='banner-box'>
				<img src={banner} alt='banner' />
			</div>
		</>
	);
};

export default Banner;
