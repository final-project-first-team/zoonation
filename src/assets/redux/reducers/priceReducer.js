const priceReducer = (state = [], action) => {
	switch (action.type) {
		case 'GET_PRICE':
			return action.payload.data;
		default:
			return state;
	}
};

export default priceReducer;
