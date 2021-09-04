import React from 'react';
import ReactDom from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
import '../styles/Cart.css';
import { v4 as uuid } from 'uuid';
import { closeCart } from '../redux/actions/cartOpen';

export default function Cart() {
	const dispatch = useDispatch();
	const isCartOpen = useSelector((state) => state.cartOpen);

	function calculateSubtotal() {
		// return cart.reduce((total, product) => {
		// 	return (total += product.quantity * product.msrp);
		// }, 0);
	}

	if (!isCartOpen) {
		console.log('cart is closed');
		return null;
	}

	return ReactDom.createPortal(
		<>
			<div className="overlay" onClick={() => console.log('close cart')}></div>

			<div className="cart-container">
				<div>
					<div className="title">
						<div>Your</div>
						<div>Shopping</div>
						<div>Cart</div>
					</div>
				</div>
				<div className="cart-products-container">
					{/* {cart.map((product) => {
						return (
							<div className="cart-product" key={uuid()}>
								<div className="cart-product-detail">
									<img src={product.image} alt={product.name} className="cart-product-image" />
								</div>
								<div className="cart-product-detail">
									<div className="cart-product-name">{product.name}</div>
									<CartCounter product={product} key={uuid()} />
								</div>
								<div className="cart-product-detail">
									<div className="cart-product-msrp">${product.msrp}</div>
								</div>
							</div>
						);
					})} */}
					{calculateSubtotal() !== 0 && <div className="cart-subtotal">Subtotal: ${calculateSubtotal()}</div>}
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
