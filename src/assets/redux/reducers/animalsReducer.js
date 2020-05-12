const animalsReducer = (state = [], action) => {
	switch (action.type) {
		case 'GET_ANIMALS':
			return action.payload.data;
		default:
			return state;
	}
};

export default animalsReducer;
