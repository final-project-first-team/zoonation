import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;

export const getAdoptData = (id) => {
	return (dispatch) => {
		return axios
			.get(`${apiUrl}/adoptData/${id}`)
			.then((response) => {
				dispatch(getAdoptDataSuccess(response.data));
			})
			.catch((error) => {
				console.log(error);
				throw error;
			});
	};
};

export const getAdoptDataSuccess = (data) => {
	return {
		type: 'GET_ADOPT_DATA',
		payload: {
			data
		}
	};
};
