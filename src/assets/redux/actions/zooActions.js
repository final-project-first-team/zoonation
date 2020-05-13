import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;

export const getZoos = () => {
	return (dispatch) => {
		return axios
			.get(`${apiUrl}/zoos`)
			.then((response) => {
				dispatch(getZoosSuccess(response.data));
			})
			.catch((error) => {
				console.log(error);
				throw error;
			});
	};
};
export const getZoosSuccess = (data) => {
	return {
		type: 'GET_ZOO',
		payload: {
			data
		}
	};
};
