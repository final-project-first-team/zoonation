import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;

export const getFeedTransaction = () => {
	return (dispatch) => {
		return axios
			.get(`${apiUrl}/feedTransaction`)
			.then((response) => {
				dispatch(getDataSuccess(response.data.data));
			})
			.catch((error) => {
				console.log(error);
				throw error;
			});
	};
};

export const getDataSuccess = (data) => {
	return {
		type: 'GET_FEED_TRANSACTION',
		payload: {
			data
		}
	};
};

export const newFeedTransaction = (values) => {
	return (dispatch) => {
		return axios
			.post(`${apiUrl}/feedTransaction`, {
				userId: values.userId,
				type: values.type,
				regularFeedType: values.regularFeedType,
				regularFeedAmount: values.regularFeedAmount,
				premiumFeedType: values.premiumFeedType,
				premiumFeedAmount: values.premiumFeedAmount,
				paymentMethod: values.paymentMethod,
				total: values.total
			})
			.then((response) => {
				dispatch(newTransactionSuccess(response.data.data));
			})
			.catch((error) => {
				console.log(error);
				throw error;
			});
	};
};

export const newTransactionSuccess = (data) => {
	return {
		type: 'GET_FEED_TRANSACTION',
		payload: {
			data
		}
	};
};
