/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Header.css';

const Header = () => {
	return (
		<div className='header'>
			<div className='header-container'>
				<div className='header-box'>
					<i className='fas fa-cogs'></i>
					<h5>Blog</h5>
					<small>We make digital business simple</small>
				</div>
				<div className='header-tabs'>
					<li>
						<a href='#' className='header-link'>
							Home
						</a>
					</li>
					&nbsp; {' / '} &nbsp;
					<li>
						<a href='#' className='header-link'>
							Blog
						</a>
					</li>
				</div>
			</div>
		</div>
	);
};

export default Header;
