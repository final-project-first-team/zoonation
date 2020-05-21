const zooPartnerReducer = (state = [], action) => {
	switch (action.type) {
		case 'GET_SPECIFIC_ZOOS':
			return action.payload.data;
		default:
			return state;
	}
};

export default zooPartnerReducer;
