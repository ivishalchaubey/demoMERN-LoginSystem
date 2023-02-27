import axios from 'axios'

const URL = 'http://localhost:5000'


export const LogInUser = async (data) => {
    try {
        return await axios.post(`${URL}/login`, data)
    } catch (error) {
        console.log("Problem While Login..");
    }
}

export const SignupUser = async (data) => {
    try {
        return await axios.post(`${URL}/signup`, data)
    } catch (error) {
        console.log("Error While Register User..");
    }
}

export const allUsers = async()=>{
    try {
        return await axios.get(URL)
    } catch (error) {
        console.log("Can't Find all user..");
    }
}