import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

export default function Navbar() {
	return (
		<nav className="navbar">
			<div className="navbar-image-container"></div>
			<div className="navbar-links-container">
				<ul className="navbar-list">
					<li>
						<Link to="/">
							<button className="btn navbar-button">Home</button>
						</Link>
					</li>
					<li>
						<Link to="/about">
							<button className="btn navbar-button">About Us</button>
						</Link>
					</li>
					<li>
						<Link to="/products">
							<button className="btn navbar-button">Products</button>
						</Link>
					</li>
					<li>
						<Link to="/history">
							<button className="btn navbar-button">Order History</button>
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}
