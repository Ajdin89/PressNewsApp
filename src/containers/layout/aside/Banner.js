import React from 'react';
import banner from '../../../images/banner.jpg';

const Banner = () => {
	return (
		<>
			<h6 className="title">Banner</h6>
			<div className='banner-box'>
				<img src={banner} alt='banner' />
			</div>
		</>
	);
};

export default Banner;
