// axios的封装
// get
// post
// 请求拦截器
// 响应拦截器

import axios from "axios";


axios.defaults.baseURL = "http://localhost:3000";

// obj里传入url，params

export function get(obj){
    return axios(obj);
}

// obj里传入url，data
export function post(url,data){
    let d = new URLSearchParams();
    for(let key in data){
        d.append(key,data[key]);
    }
    return axios({
        url,
        data:d,
        method:"post"
    });
}