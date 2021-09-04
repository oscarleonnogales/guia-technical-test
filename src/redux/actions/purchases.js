export function addToPurchaseHistory(content) {
	return {
		type: 'purchases/add',
		payload: content,
	};
}
