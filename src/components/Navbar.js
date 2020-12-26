/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Icon } from '@iconify/react';
import rssIcon from '@iconify-icons/fa-solid/rss';
import androidFilled from '@iconify-icons/ant-design/android-filled';
import appleFilled from '@iconify-icons/ant-design/apple-filled';
import './Navbar.css';

const Navbar = () => {
	return (
		<div className='navbar-container'>
			<div className='logo-container'>
				<h1>asioso</h1>
				<span>digital business #simple</span>
			</div>
			<ul className='navbar-menu'>
				<li>
					<a href='#' className='nav-link'>
						Home
					</a>
				</li>
				<li>
					<a href='#' className='nav-link'>
						News <i className='fas fa-angle-down'></i>
					</a>
				</li>
				<li>
					<a href='#' className='nav-link'>
						Gadgets
					</a>
				</li>
				<li>
					<a href='#' className='nav-link'>
						Videos
					</a>
				</li>
				<li>
					<a href='#' className='nav-link'>
						Reviews
					</a>
				</li>
				<li>
					<a href='#' className='nav-link'>
						Contact us
					</a>
				</li>
			</ul>
			<div className='wrap-icon'>
				<Icon icon={rssIcon} color='#fff' width='15' className='nav-icon' />
				<Icon
					icon={androidFilled}
					color='#fff'
					width='20'
					className='nav-icon'
				/>
				<Icon icon={appleFilled} color='#fff' width='20' className='nav-icon' />
			</div>
		</div>
	);
};

export default Navbar;
