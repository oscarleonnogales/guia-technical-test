import React from 'react';
import '../styles/HomePage.css';
import Header from '../components/Header';
import Cart from '../components/Cart';

export default function HomePage() {
	return (
		<>
			<Header />
			<div className="page-title">Homepage of Revzilla clone</div>
			<Cart />
		</>
	);
}
