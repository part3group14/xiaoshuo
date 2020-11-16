import * as axiosBase from './index'

//栏目列表的所有请求

//显示所有栏目
export function getColumnlist(){
    return axiosBase.get("/loadingColList")
}

//添加文章
export function addColumnList(data){
  console.log(data);
  return axiosBase.post("/addCollist",data)
}

//删除文章
export function deleColumnlist(index){
  return axiosBase.del("http://39.104.52.111:8006/delColList?col_id="+index)
}
