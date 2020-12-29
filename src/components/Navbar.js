/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import rssIcon from '@iconify-icons/fa-solid/rss';
import androidFilled from '@iconify-icons/ant-design/android-filled';
import appleFilled from '@iconify-icons/ant-design/apple-filled';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const menuItems = [
	{
		title: 'Home',
		url: '#',
		clName: 'nav-link',
	},
	{
		title: 'News',
		url: '#',
		clName: 'nav-link',
	},
	{
		title: 'Gadgets',
		url: '#',
		clName: 'nav-link',
	},
	{
		title: 'Videos',
		url: '#',
		clName: 'nav-link',
	},
	{
		title: 'Reviews',
		url: '#',
		clName: 'nav-link',
	},
	{
		title: 'Contact Us',
		url: '#',
		clName: 'nav-link',
	},
];

const Navbar = () => {
	const [showMenu, setShowMenu] = useState(false);

	return (
		<div className='navbar-container'>
			<div className='nav'>
				<div className='logo-container'>
					<h1>asioso</h1>
					<span>digital business #simple</span>
				</div>
				<div className='menu-icon' onClick={() => setShowMenu(!showMenu)}>
					{showMenu ? <FaTimes /> : <FaBars />}
				</div>
				<div className='menu'>
					<ul className={showMenu ? 'navbar-menu active' : 'navbar-menu'}>
						{menuItems.map((item, index) => (
							<li key={index}>
								<a href={item.url} className={item.clName}>
									{item.title}
								</a>
							</li>
						))}
					</ul>
				</div>
			</div>
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
