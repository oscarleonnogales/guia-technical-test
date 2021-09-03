import React from 'react';

export default function Counter({ product }) {
	return (
		<div className="cart-counter-container">
			<button className="btn-counter cart-btn" onClick={() => console.log('-')}>
				-
			</button>
			<span className="counter-text">{product.quantity}</span>
			<button className="btn-counter cart-btn" onClick={() => console.log('+')}>
				+
			</button>
		</div>
	);
}
