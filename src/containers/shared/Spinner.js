import React from 'react';
import Container from './Container';
import spinner from '../../images/spinner.gif';

const Spinner = () => {
	return (
		<>
			<Container>
				<img src={spinner} alt='loading' className='spinner' />
			</Container>
		</>
	);
};

export default Spinner;
