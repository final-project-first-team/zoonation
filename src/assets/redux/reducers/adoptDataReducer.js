export const adoptDataReducer = (state = '', action) => {
	switch (action.type) {
		case 'GET_ADOPT_DATA':
			return action.payload.data;
		default:
			return state;
	}
};
