import axios from 'axios'

const BASE_URL = 'http://localhost:5000/api/'
const currentUser = JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user).currentUser
const TOKEN = currentUser && currentUser.accessToken
console.log(TOKEN)
 
export const publicRequest = axios.create({
    baseURL: BASE_URL,
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: { token: `Bearer ${TOKEN}`}
})