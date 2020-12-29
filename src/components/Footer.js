/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Footer.css';

const Footer = () => {
	return (
		<>
			<div className='footer'>
				<div className='footer-container'>
					<div>
						<div className='footer-logo'>
							<h1>asioso</h1>
							<span>digital business #simple</span>
						</div>
						<p className='footer-text'>
							asioso Blog is a technology blog. We make digital business simple.
						</p>
						<div className='social-icons'>
							<i className='fab fa-facebook-f'></i>
							<i className='fab fa-twitter'></i>
							<i className='fab fa-instagram'></i>
							<i className='fab fa-google-plus-g'></i>
							<i className='fab fa-pinterest'></i>
						</div>
						<div className='input-group'>
							<input
								type='text'
								placeholder='Enter your email adress'
								className='input-txt'
							/>
							<button type='submit' className='btn-submit'>
								Submit
							</button>
						</div>
					</div>
					<div className='footer-links'>
						<div className='link-wrapper'>
							<h2>Popular Categories</h2>
							<a href='#' className='link-item'>
								Marketing <span>(21)</span>
							</a>
							<a href='#' className='link-item'>
								SEO Service <span>(15)</span>
							</a>
							<a href='#' className='link-item'>
								Digital agency <span>(31)</span>
							</a>
							<a href='#' className='link-item'>
								Make Money <span>(22)</span>
							</a>
							<a href='#' className='link-item'>
								Blogging <span>(66)</span>
							</a>
						</div>
						<div className='link-wrapper'>
							<h2>Copyrights</h2>
							<a href='#' className='link-item'>
								About Us
							</a>
							<a href='#' className='link-item'>
								Advertising
							</a>
							<a href='#' className='link-item'>
								Write For Us
							</a>
							<a href='#' className='link-item'>
								Trademark
							</a>
							<a href='#' className='link-item'>
								License & Help
							</a>
						</div>
					</div>
				</div>
				<div>
					<p className='copyright'>
						&copy; asioso Blog. Design: <span>asioso Team</span>.
					</p>
				</div>
				<div className='btn-wrapp'>
					<a href='#' className='btn-scroll'>
						<i className='fas fa-angle-up'></i>
					</a>
				</div>
			</div>
		</>
	);
};

export default Footer;
