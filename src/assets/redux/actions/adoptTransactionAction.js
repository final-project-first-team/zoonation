import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;

export const newAdoptTransaction = (data) => {
	return () => {
		return axios
			.post(`${apiUrl}/adoptTransaction`, {
				userId: data.userId,
				animalId: data.id,
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

export const updateAdoptData = (data) => {
	return () => {
		return axios
			.post(`${apiUrl}/adoptData`, {
				userId: data.userId,
				animalId: data.id,
				long: data.long,
				status: 'active'
			})
			.then((response) => {})
			.catch((error) => {
				console.log(error);
				throw error;
			});
	};
};
