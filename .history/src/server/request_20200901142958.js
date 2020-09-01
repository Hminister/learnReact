
import axios from 'axios'
import {
    TIMEOUT,
    baseURL
} from "./config";
const instance = axios.create({
    baseURL: 'https://httpbin.org/post',
    timeout: TIMEOUT,
})

export default instance