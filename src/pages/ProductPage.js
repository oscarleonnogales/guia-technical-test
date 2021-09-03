import React, { useState, useEffect } from 'react';
// import '../styles/ProductPage.css';
import Header from '../components/Header';
// import Cart from '../components/Cart';
// import ProductListing from '../components/ProductListing';

// import products from './modules/products';

// export const CartContext = React.createContext();

// const LOCAL_STORAGE_KEY = 'revzillaClone.cart';

// export default function ProductPage() {
// 	const [cart, setCart] = useState([]);
// 	const [isCartOpen, setIsCartOpen] = useState(false);

// 	function openCart() {
// 		setIsCartOpen(true);
// 	}

// 	function closeCart() {
// 		setIsCartOpen(false);
// 	}

// 	useEffect(() => {
// 		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cart));
// 	}, [cart]);

// 	useEffect(() => {
// 		products.forEach((product) => {
// 			product.quantity = 0;
// 		});

// 		const storedCart = localStorage.getItem(LOCAL_STORAGE_KEY);
// 		console.log(storedCart);
// 		if (storedCart !== null) setCart(JSON.parse(storedCart));
// 	}, []);

// 	function addToCart(id, quantity) {
// 		const product = products.find((product) => product.id === id);
// 		let cartCopy = [...cart];

// 		if (cartCopy.includes(product)) {
// 			cartCopy.find((p) => p.id === id).quantity += quantity;
// 		} else {
// 			product.quantity += quantity;
// 			cartCopy.push(product);
// 		}
// 		setCart([...cartCopy]);
// 		openCart();
// 	}

// 	function decreaseInCart(id) {
// 		let cartCopy = [...cart];
// 		const product = cartCopy.find((product) => product.id === id);

// 		if (product.quantity > 1) {
// 			product.quantity -= 1;
// 			setCart([...cartCopy]);
// 		} else {
// 			removeFromCart(id);
// 		}
// 	}

// 	function removeFromCart(id) {
// 		setCart(cart.filter((product) => product.id !== id));
// 	}

// 	const cartContextValue = {
// 		cart,
// 		addToCart,
// 		decreaseInCart,
// 		isCartOpen,
// 		closeCart,
// 	};

// 	return (
// 		<CartContext.Provider value={cartContextValue}>
// 			<Header></Header>
// 			<button onClick={() => openCart()} className="open-cart-btn">
// 				Open Cart
// 			</button>
// 			<div className="products-container">
// 				{products.map((product) => {
// 					return <ProductListing addToCart={addToCart} product={product} key={product.id}></ProductListing>;
// 				})}
// 			</div>
// 			<Cart></Cart>
// 		</CartContext.Provider>
// 	);
// }

export default function ProductPage() {
	return <div>products</div>;
}
