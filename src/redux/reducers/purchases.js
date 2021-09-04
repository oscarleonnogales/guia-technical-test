const purchasesReducer = (purchases = [], action) => {
	switch (action.type) {
		case 'purchases/add':
			return [...purchases, action.payload];
		default:
			return purchases;
	}
};

export default purchasesReducer;
