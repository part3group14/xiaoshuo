//axios请求方式
//get请求
//post请求
//请求拦截器
//响应拦截器

import axios from 'axios'

axios.defaults.baseURL = "http://39.104.52.111:8006";
// axios.defaults.baseURL = "http://localhost:3000";
//obj里面传入url，params

export function get(obj) {
    return axios.get(obj)
}

export function del(obj) {
    return axios.delete(obj)
}

export function post(obj){
    return axios.post(obj)
}