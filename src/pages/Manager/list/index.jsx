import React, { Component } from 'react'
import BreadCrumb from '../../../components/BreadCrumb'
import { DatePicker, Space } from 'antd';
import { MonitorOutlined } from '@ant-design/icons';

import { InputWrap, RangeWrap} from '../styledManger'
import TableShow from '../../../components/manger/table'
import CaseBar from '../../../components/manger/caseBar'

export default class MangerList extends Component {
  constructor(props) {
    super()
    this.state = {
      deleteId:[],
      list:{
        title1:"首页",
        title2:"会员管理",
        title3:"管理员列表"
      },
      loginName:"",
      startTime:"",
      endTime:""
    }
  }
  
  changeName(e,key){
    this.setState({
      [key]:e.target.value
    })
    // console.log(this.state.loginName)
  }
  toStart(date,dateString) {
    // this.setState({
    //   startTime:dateString
    // })
    console.log(dateString);
  }
  toEnd(date,dateString) {
    console.log(dateString);
  }
  searchRange(){
    console.log(this.state.startTime);
  }

  deletedList(deleteId){
    this.setState({
      deleteId
    })
  }

  render() {
    return (
      <>
      <BreadCrumb list={this.state.list}/>
      <InputWrap>
        <Space>
          <RangeWrap>日期范围</RangeWrap>
          <DatePicker
            placeholder={"开始日"}
            onChange={this.toStart}
          />
          <DatePicker 
            placeholder={"截止日"} 
            onChange={this.toEnd}
          />
          <input type="text" className="inputName" placeholder="请输入登录名" value={this.state.loginName} onChange={(e) =>{ this.changeName(e,"loginName") }} />
          <MonitorOutlined className="btn" onClick={()=>this.searchRange()} />
        </Space>
        <CaseBar deleteId={this.state.deleteId}></CaseBar>
        <TableShow  passDeleteID={(deleteId)=>this.deletedList(deleteId)}/>
      </InputWrap>
      </>
    )
  }
}
