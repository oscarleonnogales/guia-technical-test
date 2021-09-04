import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Cart from '../components/Cart';
import '../styles/CheckoutPage.css';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../redux/actions/cart';
import { closeCart } from '../redux/actions/cartOpen';
import { Link } from 'react-router-dom';
import { addToPurchaseHistory } from '../redux/actions/purchases';

export default function CheckoutPage() {
	const dispatch = useDispatch();
	const cart = useSelector((state) => state.cart);
	const [justCheckedOut, setJustCheckedOut] = useState(false);

	useEffect(() => {
		dispatch(closeCart());
	}, [dispatch]);

	const onSubmit = (e) => {
		e.preventDefault();
		setJustCheckedOut(true);
		cart.forEach((product) => {
			dispatch(addToPurchaseHistory(product));
		});
		removeAllFromCart();
	};

	const removeAllFromCart = () => {
		dispatch(clearCart());
	};

	return (
		<>
			<Header />
			{cart.length > 0 && (
				<>
					<h1 className="checkout-title">Checkout</h1>
					<form onSubmit={onSubmit} className="checkout-form">
						<div className="form-group">
							<label htmlFor="first">First name</label>
							<input required type="text" name="first"></input>
						</div>
						<div className="form-group">
							<label htmlFor="last">Last name</label>
							<input required type="text" name="last"></input>
						</div>
						<div className="form-group">
							<label htmlFor="phone">Phone number</label>
							<input required type="number" name="phone"></input>
						</div>
						<div className="form-group">
							<label htmlFor="email">Email</label>
							<input required type="email" name="email"></input>
						</div>
						<div className="form-group">
							<label htmlFor="email">Address</label>
							<input required type="text" name="address"></input>
						</div>
						<div className="form-group">
							<label htmlFor="name">Credit Card Number</label>
							<input required type="number" name="credit"></input>
						</div>
						<div className="form-group">
							<label htmlFor="name">Expiration</label>
							<input required type="number" name="exp"></input>
						</div>
						<div className="form-group">
							<label htmlFor="name">Security Code</label>
							<input required type="number" name="code"></input>
						</div>
						<div className="form-group">
							<button type="submit" className="checkout-btn">
								Checkout
							</button>
						</div>
					</form>
				</>
			)}
			{!justCheckedOut && cart.length === 0 && (
				<>
					<h1 className="checkout-title">Cart Is Empty</h1>
					<p className="checkout-paragraph">Add something before you can continue</p>
				</>
			)}

			{justCheckedOut && cart.length === 0 && (
				<>
					<h1 className="checkout-title">Thank you!</h1>
					<p className="checkout-paragraph">We have your order and your purchase is on it's way</p>
					<div className="btn-container">
						<Link to="/history">
							<button className="checkout-btn">Purchase History</button>
						</Link>
					</div>
				</>
			)}
			<Cart />
		</>
	);
}
