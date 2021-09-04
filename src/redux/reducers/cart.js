const cartReducer = (cart = [], action) => {
	switch (action.type) {
		case 'cart/add':
			return [...cart, action.payload];
		case 'cart/remove':
			return [...cart.filter((product) => product.id !== action.payload.id)];
		default:
			return cart;
	}
};

export default cartReducer;
