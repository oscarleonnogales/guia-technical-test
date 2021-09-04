import React from 'react';
import '../styles/ProductPage.css';
import Header from '../components/Header';
import Cart from '../components/Cart';
import ProductListing from '../components/ProductListing';

import products from '../products';

export default function ProductPage() {
	// useEffect(() => {
	// 	localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cart));
	// }, [cart]);

	// 	const storedCart = localStorage.getItem(LOCAL_STORAGE_KEY);
	// 	console.log(storedCart);
	// 	if (storedCart !== null) setCart(JSON.parse(storedCart));
	// }, []);

	return (
		<>
			<Header />
			<div className="products-container">
				{products.map((product) => {
					return <ProductListing product={product} key={product.id}></ProductListing>;
				})}
			</div>
			<Cart />
		</>
	);
}
