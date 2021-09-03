import React, { useState } from 'react';
import '../styles/ProductListing.css';
import Counter from './Counter';

export default function ProductListing(props) {
	const [count, setCount] = useState(1);
	const { product, addToCart } = props;

	function updateCount(newCount) {
		setCount(newCount);
	}

	return (
		<div className="product">
			<figure>
				<img src={product.image} alt={product.name} className="product-image"></img>
				<figcaption className="product-caption">{product.name}</figcaption>
			</figure>
			<div className="product-price">
				${product.msrp}
				<span className="cents">95</span>
			</div>
			<Counter count={count} updateCount={updateCount} />
			<button
				onClick={() => {
					addToCart(product.id, count);
					setCount(1);
				}}
				className="btn-add-to-cart"
			>
				Add to cart
			</button>
		</div>
	);
}
