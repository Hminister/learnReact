
import axios from 'axios'
import {
    TIMEOUT,
    baseURL
} from "./config";
const instance = axios.create({
    baseURL: 'https://httpbin.org/post',
    timeout: 5000,
})

export default instance