export const saveAmount = (data) => {
	return {
		type: 'SAVE_AMOUNT',
		payload: {
			data
		}
	};
};