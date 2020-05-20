export const getTrayData = (data) => {
	return {
		type: 'GET_CART_DATA',
		payload: {
			data
		}
	};
};
