export const saveAmountReducer = (state = '', action) => {
	switch (action.type) {
		case 'SAVE_AMOUNT':
			return action.payload.data;
		default:
			return state;
	}
};