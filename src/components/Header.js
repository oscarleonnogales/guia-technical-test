import React from 'react';
import Navbar from './Navbar';
import '../styles/Header.css';
import { useDispatch } from 'react-redux';
import { openCart } from '../redux/actions/cartOpen';
import { Link } from 'react-router-dom';
import logo from '../images/revzilla-logo.png';

export default function Header() {
	const dispatch = useDispatch();

	return (
		<div className="header">
			<div className="header-content">
				<div className="logo-container">
					<Link to="/">
						<img src={logo} alt="Revzilla Logo" className="logo-image"></img>
					</Link>
				</div>
				<div className="searchbar-container">
					<form>
						<input type="text" className="search-input" placeholder="Search Product or Part #"></input>
					</form>
				</div>
			</div>
			<Navbar></Navbar>
			<button onClick={() => dispatch(openCart())} className="open-cart-btn">
				Open Cart
			</button>
		</div>
	);
}
