import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;

export const getStorage = (id) => {
	return (dispatch) => {
		return axios
			.get(`${apiUrl}/foodStorage/${id}`)
			.then((response) => {
				dispatch(getStorageSuccess(response.data.data));
			})
			.catch((error) => {
				console.log(error);
				throw error;
			});
	};
};

export const getStorageSuccess = (data) => {
	return {
		type: 'GET_USER_STORAGE',
		payload: {
			data
		}
	};
};

export const updateStorage = (id, values) => {
	return (dispatch) => {
		return axios
			.put(`${apiUrl}/foodStorage/${id}`, {
				regularMeat: values.regularMeat,
				premiumMeat: values.premiumMeat,
				regularFodder: values.regularFodder,
				premiumFodder: values.premiumFodder,
				regularFruit: values.regularFruit,
				premiumFruit: values.premiumFruit,
				regularBean: values.regularBean,
				premiumBean: values.premiumBean
			})
			.then((response) => {
				dispatch(updateStorageSuccess(response.data.data));
			})
			.catch((error) => {
				console.log(error);
				throw error;
			});
	};
};

export const updateStorageSuccess = (data) => {
	return {
		type: 'UPDATE_USER_STORAGE',
		payload: {
			data
		}
	};
};
