import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

// GET user data from API
export const getUser = () => {
    return (dispatch) => {
        return axios.get(apiUrl)
            .then(response => {
                console.log(response);
                
                dispatch(getUserSuccess(response.data))
            })
            .catch(error => {
                throw(error)
            })
    }
}
export const getUserSuccess = (data) => {
    return {
        type: "GET_USER",
        payload: {data}
    }
}

// POST new user to API
export const addUser = (values) => {
    return (dispatch) => {
        return axios.post(`${apiUrl}`, values)
            .then(response => {
                dispatch(addUserSuccess(response.data))
            })
            .catch(error => {
                throw(error)
            })
    }
}
export const addUserSuccess = (data) => {
    return {
        type: "POST_USER",
        payload: {data}
    }
}

