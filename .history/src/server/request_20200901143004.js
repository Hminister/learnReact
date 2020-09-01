
import axios from 'axios'
import {
    TIMEOUT,
    baseURL
} from "./config";
const instance = axios.create({
    baseURL: baseURL,
    timeout: TIMEOUT,
})

export default instance