const storageReducer = (state = [], action) => {
	switch (action.type) {
		case 'GET_USER_STORAGE':
			return action.payload.data;
		case 'UPDATE_USER_STORAGE':
			return action.payload.data;
		default:
			return state;
	}
};

export default storageReducer;
