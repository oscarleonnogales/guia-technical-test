import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/actions/cart';
import { openCart } from '../redux/actions/cartOpen';
import '../styles/ProductListing.css';

export default function ProductListing({ product }) {
	const cart = useSelector((state) => state.cart);
	const dispatch = useDispatch();

	const attemptToAdd = (product) => {
		// If already in cart, don't add
		if (cart.includes(product)) {
			//prompt use that the product is already in their cart
		} else {
			dispatch(addToCart(product));
			dispatch(openCart());
		}
	};

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
			<button
				onClick={() => {
					attemptToAdd(product);
				}}
				className="btn-add-to-cart"
			>
				Add to cart
			</button>
		</div>
	);
}
