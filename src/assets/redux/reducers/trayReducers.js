export const trayReducer = (state = '', action) => {
	switch (action.type) {
		case 'GET_TRAY_DATA':
			return action.payload.data;
		default:
			return state;
	}
};

export const amountTrayReducer = (state = 0, action) => {
	switch (action.type) {
		case 'TRAY_INCREMENT':
			return state + 1;
		case 'TRAY_DECREMENT':
			return state < 1 ? 0 : state - 1;
		case 'RESET_AMOUNT_TRAY':
			return (state = 0);
		default:
			return state;
	}
};
