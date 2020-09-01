
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
})
export default instance