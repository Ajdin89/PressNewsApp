import React from 'react';
import Container from './Container';
import spinner from '../../images/spinner.gif';

const Spinner = () => {
	return (
		<>
			<Container>
				<div className='spin-wrap'>
					<img src={spinner} alt='loading' className='spinner' />
				</div>
			</Container>
		</>
	);
};

export default Spinner;
