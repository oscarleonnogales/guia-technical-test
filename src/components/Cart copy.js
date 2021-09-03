import React, { useContext } from 'react';
import ReactDom from 'react-dom';
import '../styles/Cart.css';
import CartCounter from './CartCounter';
import { v4 as uuid } from 'uuid';
import { CartContext } from './ProductPage';

export default function Cart() {
	const { cart, isCartOpen, closeCart } = useContext(CartContext);

	function calculateSubtotal() {
		return cart.reduce((total, product) => {
			return (total += product.quantity * product.msrp);
		}, 0);
	}

	if (!isCartOpen) return null;

	return ReactDom.createPortal(
		<>
			<div className="overlay" onClick={() => closeCart()}></div>

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
									<CartCounter product={product} key={uuid()} />
								</div>
								<div className="cart-product-detail">
									<div className="cart-product-msrp">${product.msrp}</div>
								</div>
							</div>
						);
					})}
					{calculateSubtotal() !== 0 && <div className="cart-subtotal">Subtotal: ${calculateSubtotal()}</div>}
				</div>
				<div className="checkout-btn-container">
					<button className="checkout-btn cart-btn" onClick={() => alert('Coming soon!')}>
						Checkout
					</button>
				</div>
				<button className="btn close-cart-btn" onClick={() => closeCart()}>
					&times;
				</button>
			</div>
		</>,
		document.getElementById('portal')
	);
}
