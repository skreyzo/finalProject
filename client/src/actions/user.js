import axios from 'axios';
import {setUser} from "../reducers/userReducer";

export const registration = async (email, password) => {
    try {
        const response = await axios.post(`http://localhost:3010/api/registration`, {
            email,
            password
        })
        alert(response.data.message)
    } catch (error) {
        alert(error.response.data.message)
    }

}

export const signIn = (email, password) => {
    return async dispatch => {
        try {
            const response = await axios.post(`http://localhost:3010/api/login`, {
                email,
                password
            })
            dispatch(setUser(response.data.user))
            localStorage.setItem('refreshToken', response.data.token)
            
        } catch (e) {
            alert(e.response.data.message)
        }
    }
}

export const logout =  () => {
    return async dispatch => {
        try {
            const response = await axios.get(`http://localhost:3010/api/logout`,
                {headers:{Authorization:`Bearer ${localStorage.getItem('refreshToken')}`}}
            )
            dispatch(setUser(response.data.user))
            localStorage.setItem('refreshToken', response.data.token)
        } catch (e) {
            alert(e.response.data.message)
            localStorage.removeItem('refreshToken')
        }
    }
}