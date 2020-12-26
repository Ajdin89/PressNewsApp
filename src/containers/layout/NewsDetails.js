import React from 'react';
import Container from '../shared/Container';
import Moment from 'moment';
import newsImg from '../../images/news-headlines.jpg';

const NewsDetails = ({ news, goBack }) => {
	return (
		<Container>
			<div className='news-wrapper'>
				<button className='btn btn-primary mt-4 mb-4' onClick={() => goBack()}>
					Back
				</button>
				<div>
					{news.image !== 'None' ? (
						<img src={news.image} alt='img'/>
					) : (
						<img src={newsImg} alt='img'/>
					)}
				</div>
				<span className='item-category'>{news.category}</span>
				<h5 className='item-title'>{news.title}</h5>
				<p className='item-text'>{news.description}</p>
				<div>
					<span className='date'>
						{Moment(news.published).format('DD-MMM-YYYY')}&nbsp; / &nbsp;
					</span>
					<span className='author'>{news.author}</span>
				</div>
			</div>
		</Container>
	);
};

export default NewsDetails;
