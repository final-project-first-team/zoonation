import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;

// POST new user to API
export const addUser = (values) => {
	return (dispatch) => {
		console.log(apiUrl);
		return axios
			.post(`${apiUrl}/users`, values)
			.then((response) => {
				dispatch(addUserSuccess(response.data));
			})
			.catch((error) => {
				alert(error.response.data);
				throw error;
			});
	};
};
export const addUserSuccess = (data) => {
	return {
		type: 'POST_USER',
		payload: { data }
	};
};
