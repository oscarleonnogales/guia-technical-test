import React, { useState, useEffect } from 'react';
import ReactDom from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/actions/cart';
import '../styles/Cart.css';
import { v4 as uuid } from 'uuid';
import { closeCart } from '../redux/actions/cartOpen';

export default function Cart() {
	const dispatch = useDispatch();
	const isCartOpen = useSelector((state) => state.cartOpen);
	const cart = useSelector((state) => state.cart);
	const [subtotal, setSubtotal] = useState(0);

	useEffect(() => {
		const newTotal = cart.reduce((total, product) => {
			return (total += product.msrp);
		}, 0);
		setSubtotal(newTotal);
	}, [cart]);

	// Don't render the modal if the state is set to 'closed'
	if (!isCartOpen) return null;

	return ReactDom.createPortal(
		<>
			<div className="overlay" onClick={() => dispatch(closeCart())}></div>

			<div className="cart-container">
				<div>
					<div className="title">
						<div>Your</div>
						<div>Shopping</div>
						<div>Cart</div>
					</div>
				</div>
				<div className="cart-products-container">
					{cart.map((product) => {
						return (
							<div className="cart-product" key={uuid()}>
								<div className="cart-product-detail">
									<img src={product.image} alt={product.name} className="cart-product-image" />
								</div>
								<div className="cart-product-detail">
									<div className="cart-product-name">{product.name}</div>
								</div>
								<div className="cart-product-detail">
									<div className="cart-product-msrp">${product.msrp}</div>
								</div>
								<div className="cart-product-remove-btn-container">
									<button className="remove-from-cart-btn" onClick={() => dispatch(removeFromCart(product))}>
										&times; Remove from cart
									</button>
								</div>
							</div>
						);
					})}
					{subtotal !== 0 && <div className="cart-subtotal">Subtotal: ${subtotal}</div>}
				</div>
				<div className="checkout-btn-container">
					<button className="checkout-btn cart-btn" onClick={() => alert('Coming soon!')}>
						Checkout
					</button>
				</div>
				<button className="btn close-cart-btn" onClick={() => dispatch(closeCart())}>
					&times;
				</button>
			</div>
		</>,
		document.getElementById('portal')
	);
}
