// axios的封装
// get
// post
// 请求拦截器
// 响应拦截器

import axios from "axios";
axios.defaults.baseURL = "http://39.104.52.111:8006";

// obj里传入url，params

export function get(obj){
  return axios(obj);
}


// obj里传入url data header
export function post(url,data){
  // let d = new URLSearchParams();
  // for(let key in data){
  //     d.append(key,data[key]);
  // }
  return axios({
      url,
      method:"post",
      data,
      headers:{
        "Content-Type":"raw"
      },
  });
}

// 删除
export function del(url,id){
  return axios({
    url:url+'?uid='+id,
    methods: "delete"
  });
}
export function delR(url,id){
  return axios({
    url:url+'?role_id='+id,
    methods: "delete"
  });
}
// 编辑
export function put(url,data){
  return axios({
    url,
    headers:{
      "content-type":"application/json"
    },
    data,
    methods: "put"
  });
}

// 请求拦截器
// axios.interceptors.request.use(function(config){ 
//     let token = sessionStorage.getItem("token");
//     if(token){
//         config.headers.authorization = token;

//     }
//     // 加loading。
//     // Loading = true;
//     return config;
// },function(){
 
// });		
axios.interceptors.request.use(request => {
  // console.log("request")
  if (localStorage.getItem('token')) { // 判断是否存在token，没有跳转login页面
    //设置默认请求头
    request.headers = {
      'token': localStorage.getItem('token')
    }
    // console.log(request)
  }
  return request;
}, function (error) {
  return Promise.reject(error);
});



// axios.interceptors.response.use(
//   function (response) {//response参数是响应对象
//      return response;
//   }, function (error) {
//     console.log('响应出错')
//     return Promise.reject(error)
//   })