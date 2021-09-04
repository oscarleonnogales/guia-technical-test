const cartReducer = (cart = [], action) => {
	switch (action.type) {
		case 'cart/add':
			return [...cart, action.payload];
		case 'cart/remove':
			return [...cart.filter((product) => product.id !== action.payload.id)];
		case 'cart/clear':
			return [];
		default:
			return cart;
	}
};

export default cartReducer;
