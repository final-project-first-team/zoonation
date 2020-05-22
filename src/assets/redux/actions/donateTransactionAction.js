import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;

export const newDonateTransaction = (data) => {
	return () => {
		return axios
			.post(`${apiUrl}/donateTransaction`, {
				userId: data.userId,
				zooId: data.zooId,
				status: data.status,
				name: data.userData.name,
				email: data.userData.email,
				phone: data.userData.phone,
				message: data.userData.message,
				amount: data.adoptRate,
				paymentMethod: data.paymentMethod
			})
			.then((response) => {})
			.catch((error) => {
				console.log(error);
				throw error;
			});
	};
};
