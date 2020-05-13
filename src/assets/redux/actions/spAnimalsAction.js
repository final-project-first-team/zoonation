import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;

export const getSpecificAnimals = (id) => {
	return (dispatch) => {
		return axios
			.get(`${apiUrl}/animals/${id}`)
			.then((response) => {
				dispatch(getSpecificAnimalsSuccess(response.data));
			})
			.catch((error) => {
				console.log(error);
				throw error;
			});
	};
};
export const getSpecificAnimalsSuccess = (data) => {
	return {
		type: 'GET_SPECIFIC_ANIMALS',
		payload: {
			data
		}
	};
};
