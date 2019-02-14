import axios from 'axios';
import QS from 'qs';
import {
    Message
} from 'element-ui';

// 创建axios实例
const http = axios.create({
    timeout: 10000,
    baseURL: 'https://localhost:3306'
})

// 请求拦截器
http.interceptors.request.use(config => {
    // let token = store.state.app.token || localStorage.getItem('_token');
    // if (token) {
    //     config.headers.Authorization = 'bearer ' + token;
    // }

    return config;
}, error => {
    console.log(error)
    return Promise.reject(error)
})

// 响应拦截器
http.interceptors.response.use(
    response => {
        return response.data
    },
    error => {
        if (error.response.status) {
            Message(error.response.status)
        }
        return Promise.reject(error.response)
    }
)

export default http