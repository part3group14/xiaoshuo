import {getAllAdmin,addPerson,delManger} from '../utils/manger'
import axios from "axios"

// 获取所有管理员
export const getAllAsync = () => ((dispatch)=>(
  getAllAdmin().then(res=>{
    dispatch({
      type:"GETALL",
      payload:res.data
    })
  })
))

  // 添加
  export const addAsync = (dataIn) => ((dispatch)=>(
    console.log("增加的数据",dataIn),
    // console.log(sessionStorage.getItem('/token')),
    addPerson(dataIn)
    .then(res=>{
      console.log("增加的返回的数据",res.data)
      dispatch({
        type:"",
        payload:res.data
      })
        getAllAsync()
  })
))

//删除
export const deleteAsync =(id)=>((dispatch)=>(
  console.log("Asyncid",id),

  // delManger(id)
axios.delete({
  // console.log(id),
    url:"http://39.104.52.111:8006/MangerListDel?uid="+id,
    headers:{
        "content-type":"application/json"
      }
  })
  .then(res=>{
    console.log(id)
    console.log(res.data)
    // dispatch({
    //   type:"GETALL",
    //   payload:res.data
    // })
  })
))
// // 更新
export const updateAsync = (id)=>((dispatch)=>{
  getAllAdmin().then(res=>{
    // console.log(res)
  })
})