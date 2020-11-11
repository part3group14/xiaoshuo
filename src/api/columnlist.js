import * as axiosBase from './index'

//栏目列表的所有请求

//显示所有栏目
export function getColumnlist(){
    return axiosBase.get("/loadingColList")
}

//添加文章