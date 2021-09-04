import React from 'react';
import Header from '../components/Header';
import Cart from '../components/Cart';
import { v4 as uuid } from 'uuid';
import { useSelector } from 'react-redux';
import '../styles/Cart.css';
import '../styles/History.css';

export default function HistoryPage() {
	const purchases = useSelector((state) => state.purchases);

	return (
		<>
			<Header />
			<div>
				{purchases.map((product) => {
					return (
						<div className="history-product" key={uuid()}>
							<div className="cart-product-detail">
								<img src={product.image} alt={product.name} className="cart-product-image" />
							</div>
							<div className="cart-product-detail">
								<div className="cart-product-name">{product.name}</div>
							</div>
							<div className="cart-product-detail">
								<div className="cart-product-msrp">${product.msrp}</div>
							</div>
						</div>
					);
				})}
			</div>
			<Cart />
		</>
	);
}
