
import axios from 'axios'
const instance = axios.create({
    baseURL: 'https://httpbin.org/post',
    timeout: 5000,
})

export default instance