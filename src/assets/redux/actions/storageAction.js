import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;

export const getStorage = (id) => {
	return (dispatch) => {
		return axios
			.get(`${apiUrl}/foodStorage/${id}`)
			.then((response) => {
				dispatch(getStorageSuccess(response.data));
			})
			.catch((error) => {
				console.log(error);
				throw error;
			});
	};
};
export const getStorageSuccess = (data) => {
	return {
		type: 'GET_PRICE',
		payload: {
			data
		}
	};
};
