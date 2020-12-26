import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Forecast.css';

const API = {
	key: '22b170583de570e1cae6dca6bf1520be',
	baseURL: 'http://api.openweathermap.org/data/2.5/',
	iconURL: 'http://openweathermap.org/img/wn/',
};

const Forecast = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [weather, setWeather] = useState({
		name: '',
		country: '',
		temperature: '',
		description: '',
		icon: '',
	});

	useEffect(() => {
		const getWeather = async () => {
			const response = await axios.get(
				`${API.baseURL}weather?q=Sarajevo,bih&units=metric&appid=${API.key}`
			);
			// console.log(response.data);
			setWeather({
				name: response.data.name,
				country: response.data.sys.country,
				temperature: response.data.main.temp,
				description: response.data.weather[0].main,
				icon: response.data.weather[0].icon,
			});
			setIsLoading(false);
		};
		getWeather();
	}, []);

	return (
		<div>
			<h6 className="title">Weather Forecast</h6>
			{!isLoading ? (
				<div className='forecast-box'>
					<div className='forecast-content'>
						<h2 className='location'>
							{weather.name}, {weather.country}
						</h2>
						<div className='temp'>{Math.floor(weather.temperature)}&#8451;</div>
						<div className='icon-wrapp'>
							<img src={`${API.iconURL}${weather.icon}.png`} alt='icon' />
						</div>
						<div className='weather-description'>{weather.description}</div>
					</div>
				</div>
			) : (
				''
			)}
		</div>
	);
};

export default Forecast;
