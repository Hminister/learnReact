
import axios from 'axios'
import {
    TIMEOUT,
    baseURL
} from "./config";


const instance = axios.create({
    baseURL: baseURL,
    timeout: TIMEOUT,
})

instance.interceptors.request.use(config => {
    return config
}, err => {
    return err
})

instance.interceptors.response.use(response => {
    return response.data
}, err => {
    return err
})

export default instance