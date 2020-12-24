import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './containers/Home';
// STYLING
import './App.css';

const App = () => {
	return (
		<>
			<Navbar />
			<Header />
			<Home />
			<Footer />
		</>
	);
};

export default App;
