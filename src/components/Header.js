import React from 'react';
import Navbar from './Navbar';
import '../styles/Header.css';
import { Link } from 'react-router-dom';
import logo from '../images/revzilla-logo.png';

export default function Header() {
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
		</div>
	);
}
