const spAnimalsReducer = (state = [], action) => {
	switch (action.type) {
		case 'GET_SPECIFIC_ANIMALS':
			return action.payload.data;
		default:
			return state;
	}
};

export default spAnimalsReducer;
