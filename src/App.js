import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import AboutPage from './pages/AboutPage';
import CheckoutPage from './pages/CheckoutPage';
import HistoryPage from './pages/HistoryPage';
import { useSelector } from 'react-redux';

function App() {
	const cart = useSelector((state) => state.cart);

	useEffect(() => {
		console.log(cart);
	}, [cart]);

	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/products" component={ProductPage} />
				<Route exact path="/about" component={AboutPage} />
				<Route exact path="/checkout" component={CheckoutPage} />
				<Route exact path="/history" component={HistoryPage} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
