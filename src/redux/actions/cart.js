export function addToCart(product) {
	return {
		type: 'cart/add',
		payload: product,
	};
}

export function removeFromCart(product) {
	return {
		type: 'cart/remove',
		payload: product,
	};
}
