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

export const resetAmountCart = () => {
	return {
		type: 'RESET_AMOUNT_CART'
	};
};

export const priceMultiplierUp = (amount, basePrice) => {
	return {
		type: 'CART_PRICE_INCREMENT',
		payload: {
			amount,
			basePrice
		}
	};
};

export const priceMultiplierDown = (amount, basePrice) => {
	return {
		type: 'CART_PRICE_DECREMENT',
		payload: {
			amount,
			basePrice
		}
	};
};

export const resetPriceCart = () => {
	return {
		type: 'CART_PRICE_RESET'
	};
};
