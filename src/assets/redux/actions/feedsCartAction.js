export const getCartData = (data) => {
	return {
		type: 'GET_CART_DATA',
		payload: {
			data
		}
	};
};

export const amountIncrement = () => {
	return {
		type: 'INCREMENT'
	};
};

export const amountDecrement = () => {
	return {
		type: 'DECREMENT'
	};
};
