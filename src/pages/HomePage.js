import React from 'react';
import '../styles/HomePage.css';
import Header from '../components/Header';
import Cart from '../components/Cart';

export default function HomePage() {
	return (
		<>
			<Header />
			<h1 className="homepage-title">Welcome to Revzilla!</h1>
			<p className="homepage-paragraph">Click no the products tab in the navigation bar to see our products.</p>
			<Cart />
		</>
	);
}
