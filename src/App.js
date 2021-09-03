import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/products" component={ProductPage} />
				<Route exact path="/about" component={AboutPage} />
				<Route exact path="/contact" component={ContactPage} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
