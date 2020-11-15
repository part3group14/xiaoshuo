import * as axiosBase from './index'


// 登录
export function loginCheck(data){
  return axiosBase.post('/superadmin_login',data)
}