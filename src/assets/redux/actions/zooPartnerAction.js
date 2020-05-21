import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;

export const getSpecificZoos = (id) => {
	return (dispatch) => {
		return axios
			.get(`${apiUrl}/zoos/${id}`)
			.then((response) => {
				dispatch(getSpecificZoosSuccess(response.data));
			})
			.catch((error) => {
				console.log(error);
				throw error;
			});
	};
};
export const getSpecificZoosSuccess = (data) => {
	return {
		type: 'GET_SPECIFIC_ZOOS',
		payload: {
			data
		}
	};
};
