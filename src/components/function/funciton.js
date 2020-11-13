import * as axiosBase from './index'


//获取分类列表
export function getlist(){
    return axiosBase.get("loadingPageTypeList")
}