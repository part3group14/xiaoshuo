import React,{Component} from 'react'
import {Input,Modal } from 'antd';
import {DeleteOutlined,PlusCircleOutlined } from '@ant-design/icons';
import {NewsBar} from './styledCom'
// import {delManger} from '../../utils/manger'
import store from '../../store'
import {deleteAsync,addAsync} from '../../store/action'
import {getAllAdmin} from "../../utils/manger"

export default  class CaseBar extends Component{
  constructor(props){
    super(props)
    this.state={
      visible:false,
      userInfo:{
        "user_name":"",
        "phone":"",
        "email":"",
        "role_id":0,
        "password":"",
        "re_password":""
      },
      // upIdx,
      upUser:{
        username:"",
        tel:"",
        email:"",
        role:"",
        password:"",
        surePass:""
      }
    }
  }
  
  // 删除
  delAll(){
    store.dispatch(deleteAsync(this.props.deleteId))
    console.log("传的要删除的id",this.props.deleteId)
  }
  
  showModal = () => {
    this.setState({
        visible: true,
        // upIdx:index,
        // upUser:{... }
    });
  };
  changeVal(e,key){
    this.setState({
      userInfo:{
        ...this.state.userInfo,
        // [loginName]:输入值
        [key]:e.target.value
      }
    })
  }
    // 添加
    handleOk = e => {
        this.setState({
            visible: false
        });
        store.dispatch(addAsync(this.state.userInfo))
        // console.log(this.state.userInfo)
        // store.dispatch({
        //   type:"GETALLDATA",
        //   payload:this.state.userInfo
        // })
      };

    
  handleCancel = e => {
      // console.log(e);
      this.setState({
          visible: false,
      });
  };

  render(){
    return(
      <NewsBar>
      <button className="layui-btn layui-btn-danger" onClick={()=>this.delAll()}>
      <DeleteOutlined />批量删除
      </button>
      <button className="layui-btn" onClick={this.showModal}>
        <PlusCircleOutlined />添加
      </button>
      <Modal title="添加" visible={this.state.visible} onClick={this.showModal} onCancel={this.handleCancel} onOk={this.handleOk} okText={"确定"}
          cancelText={"取消"}>
        <div className="modelP"><br />
        <span>登录名&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <Input placeholder="登录名" style={{ width: 148 }} value={this.state.userInfo.user_name} onChange={(e)=>this.changeVal(e,"user_name")} />
          <br /><br />
          <span>手机&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <Input placeholder="手机" style={{ width: 148 }} value={this.state.userInfo.phone} onChange={(e)=>this.changeVal(e,"phone")}  />
          <br /><br />
          <span>邮箱&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <Input placeholder="邮箱" style={{ width: 148 }} value={this.state.userInfo.email} onChange={(e)=>this.changeVal(e,"email")} />
          <br /><br />
          <span>角色&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <Input placeholder="角色" style={{ width: 148 }} value={this.state.userInfo.role_id} onChange={(e)=>this.changeVal(e,"role_id")}/>
          <br /><br />
          <span>密码&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <Input placeholder="密码" style={{ width: 148 }} value={this.state.userInfo.password} onChange={(e)=>this.changeVal(e,"password")}/>
          <br /><br />
          <span>确认密码&nbsp;</span>
          <Input placeholder="确认密码" style={{ width: 148 }} value={this.state.userInfo.re_password} onChange={(e)=>this.changeVal(e,"re_password")}/>
          <br /><br />

      </div>
    </Modal>
      <span className="x-right" >共有数据：<span className="layui-badge">66</span> 条</span>  
    </NewsBar>
    )
  }
}