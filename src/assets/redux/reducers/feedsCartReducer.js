export const itemsCartReducer = (state = '', action) => {
	switch (action.type) {
		case 'GET_CART_DATA':
			return action.payload.data;
		case 'RESET_ITEMS':
			return (state = '');
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
		case 'RESET_AMOUNT_CART':
			return (state = 0);
		default:
			return state;
	}
};

export const priceCartReducer = (state = 0, action) => {
	switch (action.type) {
		case 'CART_PRICE_INCREMENT':
			return action.payload.amount * action.payload.basePrice;
		case 'CART_PRICE_DECREMENT':
			return state < 1 ? 0 : action.payload.amount * action.payload.basePrice;
		case 'CART_PRICE_RESET':
			return (state = 0);
		default:
			return state;
	}
};
