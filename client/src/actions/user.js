import axios from 'axios';
import {setUser} from "../reducers/userReducer";

export const API_URL = `http://localhost:3010/api`

export const registration = async (email, password) => {
    try {
        const response = await axios.post(`${API_URL}/registration`, {
            email,
            password
        },
        {withCredentials: true})
        alert(response.data.message)
    } catch (error) {
        alert(error.response.data.message)
    }

}

export const signIn = (email, password) => {
    return async dispatch => {
        try {
            const response = await axios.post(`${API_URL}/login`, {
                email,
                password
            })
            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.refreshToken)
             console.log('~ response.data======+++++++========++++++=====', response.data)
            
        } catch (e) {
            alert(e.response.data.message)
        }
    }
}

 export const logout = async() => {
    await axios.post(`${API_URL}/logout`);
    console.log('logout=========', logout)
    localStorage.removeItem('token');            
}

export const auth =  () => {
    return async dispatch => {
        try {
            const response = await axios.get(`${API_URL}/refresh`,
            {credentials: 'include', headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}}
            )
            // const response = await axios.get(`${API_URL}/refresh`, {withCredentials: true})
            console.log('~ response 1231231231211312', response)
            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.accessToken)
            console.log('~ response.data.accessToken>>>>>>>>>>>', response.data.accessToken)
        } catch (e) {

            //alert("Ошибка Авторизации!!!!")  // e.response.data.message

            // alert("Ошибка Авторизации!!!!")  // e.response.data.message

            // localStorage.removeItem('token')
        }
    }
}
