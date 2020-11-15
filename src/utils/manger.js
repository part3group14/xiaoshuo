import * as axiosBase from "./index"

// // 管理员列表的所有的请求

// // 请求所有的数据
export function getAllAdmin(){
  return axiosBase.get('http://39.104.52.111:8006/allAdminInfo')
}
// 添加
export function addPerson(data){
  return axiosBase.post('/MangerListAdd',data)
}
// 删除
export function delManger(id){
  return axiosBase.del('/MangerListDel',id)
}
// 编辑
export function editManger(data){
  return axiosBase.put(`/MangerListEdit`,data)
}


// // 角色管理获得所有数据
export function getAllRole(){
  return axiosBase.get('/Roleall')
}
// 增加角色
export function addRole(data){
  return axiosBase.post('/mangerRoleAdd',data)
}
// 删除角色
export function delRole(id){
  return axiosBase.delR('/mangerRoleDel',id)
}


//角色分类获得所有的数据
export function getAllClassify(){
  return axiosBase.get('/authClassListall')
}
// 查询数据
export function getClassify(id){
  return axiosBase.get('/authClassListall?per_class_id='+id)
}


// // 权限获得所的数据
export function getAllAuth(){
  return axiosBase.get('/authallSearch')
}