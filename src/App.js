import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Home from './containers/Home';
import Footer from './components/Footer';
// STYLING
import './App.css';

const App = () => {
	return (
		<div>
			<Navbar />
			<Header />
			<Home />
			<Footer />
		</div>
	);
};

export default App;
