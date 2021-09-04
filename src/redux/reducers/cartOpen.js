const cartOpenReducer = (currentlyOpen = false, action) => {
	return action.payload || false;
};

export default cartOpenReducer;
