const { default: Axios } = require("axios");
import axios from 'axios'
const instance = axios.create({
    baseURL: 'https://httpbin.org/post'
})