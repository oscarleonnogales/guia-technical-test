export function openCart() {
	return {
		type: 'cartOpen/open',
		payload: true,
	};
}

export function closeCart() {
	return {
		type: 'cartOpen/close',
		payload: false,
	};
}
