import axios from 'axios';
import {setUser} from "../reducers/userReducer";

export const API_URL = `http://localhost:3010/api`

export const registration = async (firstName, lastName, email, password) => {
    try {
        const response = await axios.post(`${API_URL}/registration`, {
        firstName, 
        lastName, 
        email,
        password,
        },
        {withCredentials: true});
        alert(`Hi, ${response.data.user.firstName}! 
        Your registration has been successfully completed, log in and welcome to the family`);
    } catch (error) {
        // alert(error.response.data.message)
        alert('failed to register user');
    }
}

export const signIn = (email, password) => {
    return async dispatch => {
        try {
            const response = await axios.post(`${API_URL}/login`, {
            email,
            password
            });
            dispatch(setUser(response.data.user));
            localStorage.setItem('refreshToken', response.data.refreshToken) 
        } catch (e) {
            alert(e.response.data.message);
        }
    }
}

export const logout = async() => {
    await axios.post(`${API_URL}/logout`, {refreshToken: localStorage.getItem('refreshToken')});
    console.log('logout=========', logout);
    localStorage.removeItem('refreshToken'); 
}

export const auth = () => {
    return async dispatch => {
        try {
            // const response = await axios.get(`${API_URL}/refresh`,
            // {credentials: 'include', headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}}
            // )
            const response = await axios.post(`${API_URL}/refresh`,
            {credentials: 'include', refreshToken: localStorage.getItem('refreshToken'), headers:{Authorization:`Bearer ${localStorage.getItem('refreshToken')}`}}
            )
            // const response = await axios.get(`${API_URL}/refresh`, {withCredentials: true})
            console.log('~ response 1231231231211312', response)
            dispatch(setUser(response.data.user))
            // localStorage.setItem('accessToken', response.data.accessToken)
            localStorage.setItem('refreshToken', response.data.refreshToken)
            console.log('~ response.data.accessToken>>>>>>>>>>>', response.data.accessToken)
        } catch (e) {
            alert("Authorization Error!")
            localStorage.removeItem('token')

            // alert("Ошибка Авторизации!!!!") // e.response.data.message
        }
    }
}
