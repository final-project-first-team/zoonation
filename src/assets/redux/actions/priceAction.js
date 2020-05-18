import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;

export const getPrice = () => {
	return (dispatch) => {
		return axios
			.get(`${apiUrl}/virtualFeedsPrice/5ec25e426d87ca7a97dcd20f`)
			.then((response) => {
				dispatch(getPriceSuccess(response.data.data));
			})
			.catch((error) => {
				console.log(error);
				throw error;
			});
	};
};
export const getPriceSuccess = (data) => {
	return {
		type: 'GET_PRICE',
		payload: {
			data
		}
	};
};
