import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../redux/actions/cart';
import { openCart } from '../redux/actions/cartOpen';
import '../styles/ProductListing.css';

export default function ProductListing({ product }) {
	const cart = useSelector((state) => state.cart);
	const [inCart, setInCart] = useState(false);
	const dispatch = useDispatch();

	// If already in cart, don't add
	const attemptToAdd = (product) => {
		if (!cart.includes(product)) {
			setInCart(true);
			dispatch(addToCart(product));
		}
		dispatch(openCart());
	};

	const attemptToRemove = (product) => {
		if (cart.includes(product)) {
			setInCart(false);
			dispatch(removeFromCart(product));
		}
		dispatch(openCart());
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
			{!inCart && (
				<button
					onClick={() => {
						attemptToAdd(product);
					}}
					className="btn-add-to-cart"
				>
					Add to cart
				</button>
			)}
			{inCart && (
				<button
					onClick={() => {
						attemptToRemove(product);
					}}
					className="btn-add-to-cart remove-from-cart"
				>
					Remove from cart
				</button>
			)}
		</div>
	);
}
