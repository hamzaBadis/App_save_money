import axios from 'axios';
import CryptoJS from 'crypto-js';
import store from '../store.js';

import { URL_data } from './model'



const loginUser = async (userName, password) => {

    if (!password || !userName) alert('User name and password are required !')
    else {
        let encryUserName = CryptoJS.SHA1(userName).toString()
        let encryPassword = CryptoJS.SHA1(password).toString()

        try {

            const res = await axios.get(URL_data + 'users?name=' + encryUserName).catch((error) => {
                console.log(error);
            })
            let data = res.data[0]
            if (data) {
                if (data.password === encryPassword) {
                    store.commit('reverseAuth', true)
                    store.commit('setUserID', data.id)
                    return true
                }
                else {
                    alert('Password is wrong')
                }
            }
            else {
                alert('User  not found')
            }

        } catch (error) {
            console.log(error)
        }

    }
}

const registerUser = async (userName, password) => {
    if (!userName || !password) {
        alert("user name and password required")
    } else {
        try {
            const encryUserName = CryptoJS.SHA1(userName).toString()
            const encryPassword = CryptoJS.SHA1(password).toString()

            const res = await axios.post(URL_data + 'users', {
                name: encryUserName,
                password: encryPassword
            })
            if (res.status == 201) return true
        } catch (error) { console.log(error) }


    }
}

export {
    loginUser,
    registerUser
}