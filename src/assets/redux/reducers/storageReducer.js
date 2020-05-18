const storageReducer = (state = [], action) => {
	switch (action.type) {
		case 'GET_STORAGE':
			return action.payload.data;
		default:
			return state;
	}
};

export default storageReducer;
