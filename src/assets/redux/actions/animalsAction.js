import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;

export const getAnimals = (values) => {
	return (dispatch) => {
		return axios
			.get(`${apiUrl}/animals`)
			.then((response) => {
				dispatch(getAnimalsSuccess(response.data));
			})
			.catch((error) => {
				console.log(error);
				throw error;
			});
	};
};
export const getAnimalsSuccess = (data) => {
	return {
		type: 'GET_ANIMALS',
		payload: {
			data
		}
	};
};
