import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL

export const loginUser = (values) => {
    return (dispatch) => {
        return axios.post(`${apiUrl}/login`, values)
            .then(response => {
                dispatch(loginSuccess(response.data))
            })
            .catch(error => {
                console.log(error);
                throw(error)
                
            })
    }
}
export const loginSuccess = (data) => {
    return {
        type: "LOGIN",
        payload: {
            data
        }
    }
}