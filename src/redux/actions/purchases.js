export function addToPurchaseHistory(purchase) {
	return {
		type: 'purchases/add',
		payload: purchase,
	};
}
