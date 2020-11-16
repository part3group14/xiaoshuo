import * as axiosBase from './index'

//文章类型列表的所有请求

//显示所有文章
export function getarticleTypeList(){
    return axiosBase.get("/loadingPageTypeList")
    // return axiosBase.get("/data")
}

//添加文章类型
// export function addarticleTypeList(data){
//   return axiosBase.post("",data)
// }

//删除文章类型
export function delearticleTypeList(index){
  return axiosBase.del("http://39.104.52.111:8006/delPageTypeList?book_type_id="+String(index))
}

// 查询文章（用户名）
export function searchuserTypeList(str){
  return axiosBase.get("/searchuserTypeList?type_name="+str)
}

// 查询文章（时间）
export function searchtimeTypeList(obj){
  return axiosBase.get("/searchtimeTypeList?type_name="+obj)
}
