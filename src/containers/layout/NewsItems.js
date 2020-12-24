import React from 'react';
import Moment from 'moment';
import newsImg from '../../images/news-headlines.jpg';

const NewsItems = ({ news }) => {
	return (
		<div className='section'>
			<div className='img-wrap'>
				{news.image !== 'None' ? (
					<img src={news.image} alt='img' />
				) : (
					<img src={newsImg} alt='img' />
				)}
			</div>
			<span className='section-category'>{news.category}</span>
			<h5 className='section-title'>{news.title}</h5>
			<p className='section-text'>{news.description}</p>
			<div>
				<span className='date'>
					{Moment(news.published).format('DD-MMM-YYYY')}&nbsp; / &nbsp;
				</span>
				<span className='author'>{news.author}</span>
			</div>
		</div>
	);
};

export default NewsItems;
