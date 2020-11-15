
import React, { Component } from 'react'
import './login.css'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import { message } from 'antd';
import {loginCheck} from '../../utils/login'

class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      user:{
        "username":"bbb",
        "password":"1"
    }
  }
}

  changeVal(e, key) {
    this.setState({
      [key]: e.target.value
    })
  }

  // 点击登录验证
  // get
  loginCheck() {
    // console.log(this.state.user)
    axios({
      url: 'http://39.104.52.111:8006/admin_login',
      params:this.state.user
    }).then(res => {
      console.log("得到的数据", res.data.logiData)
      if (res.data.logiData.role === "超级管理员") {
        // sessionStorage.setItem("authorization", res.data.logiData.authorization)
        // axios.defaults.headers ={
        //   'authorization':localStorage.getItem('authorization')
        // }
        message.success('登录成功');
        // console.log(this.props.history)
        this.props.history.push('/Layout')
      }else{
        message.error('账户名或密码错误，请重新登录');
      }
    })
  }

  // // post
  // // loginCheck() {
  // //   console.log(this.state.user)
  // //   axios({
  // //     url:"http://39.104.52.111:8006/admin_login",
  // //     mrthods:"POST",
  // //     headers:{
  // //       "content-type":"application/json"
  // //     },
  // //     data:this.state.user
  // //   })
  // //   .then(res=>{
  // //     console.log("res.data", res.data);
  // //     console.log("得到的用户名", res.data[0].username)
  // //     if (res.data[0].username) {
  // //       sessionStorage.setItem("username", this.state.username)
  // //       sessionStorage.setItem("password", this.state.password)
  // //       message.success('登录成功');
  // //       console.log(this.props.history)
  // //       this.props.history.push('/Layout')
  // //     }else{
  // //       message.error('账户名或密码错误，请重新登录');
  // //     }
  // //   });
  // }

  render() {
    return (
      <div className="login-bg">
        <div className="login">
          <div className="message">系统登录</div>
          <div id="darkbannerwrap"></div>
          <form method="post" className="layui-form">
            <input name="username" value={this.state.user.username} placeholder="用户名" type="text" lay-verify="required" className="layui-input"
              onChange={(e) => this.changeVal(e, "username")}
            />
            <hr className="hr15" />
            <input name="password" lay-verify="required" value={this.state.user.password} placeholder="密码" type="password" className="layui-input"
              onChange={(e) => this.changeVal(e, "password")}
            />
            <hr className="hr15" />
            <input value="登录" style={{ width: '100%' }} type="button" onClick={() => this.loginCheck()}  />
            <hr className="hr20" />
          </form>
        </div>
      </div>
    )
  }
}

export default withRouter(Login)