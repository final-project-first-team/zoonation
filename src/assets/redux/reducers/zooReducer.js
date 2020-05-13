const zooReducer = (state = [], action) => {
	switch (action.type) {
		case 'GET_ZOO':
			return action.payload.data;
		default:
			return state;
	}
};

export default zooReducer;