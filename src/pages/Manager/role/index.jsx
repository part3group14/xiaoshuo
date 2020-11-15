import React,{Component} from 'react'
import axios from 'axios'
import { Table,Radio,Input,Modal } from 'antd';
import { EditOutlined,DeleteOutlined,QuestionCircleTwoTone,PlusCircleOutlined} from '@ant-design/icons';
import BreadCrumb from '../../../components/BreadCrumb'
import { RoleWrap} from '../styledManger'
import {getAllRole,addRole,delRole} from '../../../utils/manger'
import {NewsBar} from '../../../components/manger/styledCom'
export default class MangerRole extends Component{
  constructor(props) {
    super(props)
    this.state = {
      dataSource:[],
      visible3:false,
      visible:false,
      selectionType:'checkbox',
      deleteId:[],
      selectedRowKeys:[],
      list:{
        title1:"首页",
        title2:"会员管理",
        title3:"角色管理"
      },
      columns:[
        {
          title: 'ID',
          dataIndex: 'role_id',
          render: (text) => <a>{text}</a>,
          align:'center'
        },
        {
          title: '角色名',
          dataIndex: 'role',
          align:'center'
        },
        {
          title: '拥有权限',
          dataIndex: 'per_name',
          align:'center'
        },
        {
          title: '描述',
          dataIndex: 'note',
          align:'center'
        },
        {
          title: '操作',
          dataIndex: 'use',
          align:'center',
          render: (text,record,index) =>{return(
          <>
            <EditOutlined/>
            &nbsp;&nbsp;&nbsp;
            <DeleteOutlined onClick={()=>this.showModal4(record.role_id)}/>
          </>)} 
        }
      ],
      data:[
      ],// rowSelection object indicates the need for row selection
      role:{
        "role":"",
        "note":""
      }
    }
  }

  // 封装获得数据的
  getAllRoleList(){
    getAllRole().then(res=>this.setState({
      dataSource:res.data.role_info
    }))
  }
  // 初始渲染页面
  componentDidMount(){
    this.getAllRoleList()
  }
  // 增加角色的绑定数据
  changeRoleVal(e,key){
    this.setState({
      role:{
        ...this.state.role,
        [key]:e.target.value
      }
    })
  }
  showModal3 = () => {
    this.setState({
        visible3: true,
    });
  };

  // 增加角色
  handleOk3 = e => {
    console.log(3)
    this.setState({
        visible3: false
    });
    addRole(this.state.role)
    .then(res =>{
      this.getAllRoleList()
    })
    console.log("要添加的数据",this.state.role)
  };

  handleCancel3 = e => {
    // console.log(e);
    this.setState({
        visible3: false,
    });
};

  // 批量删除
  delRoles(){
    delRole(this.state.selectedRowKeys.join(",")).then(res =>{
      console.log(res.msg)
      this.getAllRoleList()
    })
    console.log("传的要删除的id",this.state.selectedRowKeys.join(","))
  }
  // Table

  rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      this.setState({
        selectedRowKeys
      })
    }
  };


  // 小标单个删除
  showModal4 = (id) => {
    console.log(123);
    console.log(id)
    this.setState({
      visible4: true,
    });
    delRole(id).then(res =>{
      console.log(res.msg)
      this.getAllRoleList()
    })
  };

  
  handleOk4 = (e,id) => {
    this.setState({
      visible4: false,
    });
  };

  handleCancel4 = e => {
    console.log(e);
    this.setState({
      visible4: false,
    });
  };

  
  render(){
    return(
      <RoleWrap>
        <BreadCrumb list={this.state.list}/>
        <NewsBar>
        <button className="layui-btn layui-btn-danger" onClick={()=>this.delRoles()}>
      <DeleteOutlined />批量删除
      </button>
      <button className="layui-btn" onClick={this.showModal3}>
        <PlusCircleOutlined />添加
      </button>
      <Modal 
        title="添加用户" 
        visible={this.state.visible3} 
        onCancel={this.handleCancel3} 
        onOk={this.handleOk3} 
        okText={"确定"}
        cancelText={"取消"}>
        <div className="modelP"><br />
        <span>角色名&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <Input value={this.state.role.role} onChange={(e)=>this.changeRoleVal(e,"role")} placeholder="" style={{ width: 148 }} />
          <br /><br />
          <span>描述&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <Input value={this.state.role.note} onChange={(e)=>this.changeRoleVal(e,"note")} placeholder="" style={{ width: 148 }} />
      </div>
    </Modal>
      <span className="x-right" >共有数据：<span className="layui-badge">66</span> 条</span> 
      </NewsBar>
        <Radio.Group
        onChange={({ target: { value } }) => {
          this.setState({
            selectionType:value
          })
        }}
        value={this.state.selectionType}
      >
      </Radio.Group>
 
      <Table
        rowSelection={{
          type: this.state.selectionType,
          ...this.rowSelection,
        }}
        bordered
        columns={this.state.columns}
        dataSource={this.state.dataSource}
        rowKey="role_id"
      />
      <Modal 
        title="编辑" 
        visible={this.state.visible2} 
        onOk={this.handleOk2}
        onCancel={this.handleCancel2}
        okText={"确定"}
        cancelText={"取消"}
      >
        <div className="modelP"><br />
            <span>角色名&nbsp;&nbsp;&nbsp;&nbsp;</span>
            {/* <Input placeholder="" onChange={(e)=>this.changeRole(e,"rolename")} style={{ width: 148 }} />
            <br /><br />
            <span>拥有权限&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span>描述&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <Input placeholder="" onChange={(e)=>this.changeRole(e,"role_des")} style={{ width: 148 }}  /> */}
            <br /><br />
        </div>
      </Modal>
      {/* 确认删除吗？ */}
      <Modal
          title="提示信息"
          visible={this.state.visible4}
          onOk={this.handleOk4}
          onCancel={this.handleCancel4}
          width={'280px'}
          okText={"确定"}
          cancelText={"取消"}
        >
          <p><QuestionCircleTwoTone style={{color:'#f4c605',fontSize:"30px"}}/>&nbsp;&nbsp;&nbsp;亲,确认要删除吗？</p>
          
        </Modal>
      </RoleWrap>
    )
  }
}
