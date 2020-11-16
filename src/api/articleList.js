import * as axiosBase from './index'

//文章列表的所有请求

//显示所有文章
export function getarticleList(){
    return axiosBase.get("/loadingbPageList")
    // return axiosBase.get("/data")
}

//添加文章
// export function addarticleList(data){
//   return axiosBase.post("",data)
// }

//删除文章
export function delearticleList(index){
  return axiosBase.del("http://39.104.52.111:8006/delPageList?book-id="+index)
}