export const itemsCartReducer = (state = '', action) => {
	switch (action.type) {
		case 'GET_CART_DATA':
			return action.payload.data;
		default:
			return state;
	}
};

export const amountCartReducer = (state = 0, action) => {
	switch (action.type) {
		case 'INCREMENT':
			return state + 1;
		case 'DECREMENT':
			return state < 1 ? 0 : state - 1;
		default:
			return state;
	}
};

export const priceCartReducer = (state = 0, action) => {
	switch (action.type) {
		case 'GET_CART_PRICE':
			return action.payload.data;
		default:
			return state;
	}
};
