import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;

export const loginUser = (values) => {
	return (dispatch) => {
		return axios
			.post(`${apiUrl}/users/login`, values)
			.then((response) => {
				localStorage.setItem('token', response.data.token);
				localStorage.setItem('isLoggedIn', true);
				dispatch(currentUser(response.data.token));
			})
			.catch((error) => {
				alert(error.response.data);
				throw error;
			});
	};
};

export const currentUser = (token) => {
	return (dispatch) => {
		return axios
			.get(`${apiUrl}/users/id`, {
				headers: { Authorization: `Bearer ${token}` }
			})
			.then((response) => {
				dispatch(loginSuccess(response.data.currentUser));
				dispatch(updateStatus(response.data.isLoggedIn));
			})
			.catch((error) => {
				console.log(error);
			});
	};
};

export const loginSuccess = (data) => {
	return {
		type: 'LOGIN',
		payload: {
			data
		}
	};
};

export const updateStatus = (data) => {
	return {
		type: 'UPDATE_LOGIN_STATUS',
		payload: {
			data
		}
	};
};
