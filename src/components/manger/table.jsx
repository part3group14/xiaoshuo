import React,{Component} from 'react'
import { Table,Button,Radio,Input,Modal } from 'antd';
import { CloudDownloadOutlined, EditOutlined,DeleteOutlined,QuestionCircleTwoTone} from '@ant-design/icons';
import {connect} from "react-redux"
import store from '../../store';
import {getAllAsync,updateAsync,deleteAsync} from '../../store/action'

class TableShow extends Component{
  constructor(props){
    super(props)
    this.state = {
      visible2:false,
      selectionType:'checkbox',
      selectedRowKeys:[],
      upIdx:-1,
      upUser:{
        user_name:"",
        phone:"",
        email:"",
        role_id:-1,
        password:"",
        re_password:""
      },
      columns:[
        {
          title: 'ID',
          dataIndex: 'uid',
          render: (text) => <a>{text}</a>,
          align:'center'
        },
        {
          title: '登录名',
          dataIndex: 'user_name',
          align:'center'
        },
        {
          title: '手机',
          dataIndex: 'phone',
          align:'center'
        },
        {
          title: '邮箱',
          dataIndex: 'email',
          align:'center'
        },
        {
          title: '角色',
          dataIndex: 'role',
          align:'center'
        },
        {
          title: '加入时间',
          dataIndex: 'start_time',
          align:'center'
        },
        {
          title: '状态',
          dataIndex: 'ustate',
          align:'center',
          render:() => <Button type="primary">已启用</Button>
        },
        {
          title: '操作',
          dataIndex: 'use',
          align:'center',
          render: (text,record,index) =>{return(
          <>
            <CloudDownloadOutlined/>
            &nbsp;&nbsp;&nbsp;
            <EditOutlined onClick={()=>this.showModal2(index)}/>
            &nbsp;&nbsp;&nbsp;
            <DeleteOutlined onClick={()=>this.showModalCD(index)}/>
          </>)} 
        }
      ],
      data:[
      ],// rowSelection object indicates the need for row selection
    }
    
  }

  // 管理员列表查询所有的数据
  componentDidMount(){
    store.dispatch(getAllAsync())
  }
  

  rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`选中的key值: ${selectedRowKeys}`, '选中的行: ', selectedRows);
      // console.log(selectedRowKeys.join(","))
      this.setState({
        selectedRowKeys
      })
    this.props.passDeleteID(selectedRowKeys.join(","))
    }
  };

  // 编辑
  showModal2 = (index) => {
    console.log(index);  
    this.setState({
        visible2: true,
        upIdx:index,
        upUser:{...this.props.data[index]}
    });
  };
  changeValUpUser(e,key){
    this.setState({
      upUser:{
        ...this.state.upUser,
        [key]:e.target.value
      }
    })
  }
  handleOk2 = e => {
      // console.log(this.state.upIdx);
      this.setState({
          visible2: false,
      });
     store.dispatch(updateAsync(this.state.upUser))
  };
  handleCancel2 = e => {
      // console.log(e);
      this.setState({
          visible2: false,
      });
  };
  showModalCD = () => {
    this.setState({
      visibleCD: true,
    });
  };

  // 删除单个
  handleOkCD = e => {
    this.setState({
      visibleCD: false,
    });
    store.dispatch(deleteAsync(this.state.selectedRowKeys.join(",")))
    // console.log("单个",this.state.selectedRowKeys)
  };

  
  handleCancelCD = e => {
    // console.log(e);
    this.setState({
      visibleCD: false,
    });
    
  };
  render(){
    return(
      <div>
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
        dataSource={this.props.data}
        rowKey="uid"
        
      />
          <Modal title="编辑" 
          visible={this.state.visible2} 
          onCancel={this.handleCancel2}  
          onOk={this.handleOk2}
          okText={"确定"}
          cancelText={"取消"}
          >
        <div className="modelP"><br />
            <span>登录名&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <Input value={this.state.upUser.user_name} onChange={(e)=>this.changeValUpUser(e,"user_name")} placeholder="" style={{ width: 148 }} />
            <br /><br />
            <span>手机&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <Input value={this.state.upUser.phone} onChange={(e)=>this.changeValUpUser(e,"phone")} placeholder="" style={{ width: 148 }} />
            <br /><br />
            <span>邮箱&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <Input value={this.state.upUser.email} onChange={(e)=>this.changeValUpUser(e,"email")} placeholder="" style={{ width: 148 }}  />
            <br /><br />
            <span>角色&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <Input value={this.state.upUser.role_id} onChange={(e)=>this.changeValUpUser(e,"role_id")} placeholder="" style={{ width: 148 }}  />
            <br /><br />
            <span>密码&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <Input value={this.state.upUser.password} onChange={(e)=>this.changeValUpUser(e,"password")} placeholder="" style={{ width: 148 }} />
            <br /><br />
            <span>确认密码&nbsp;</span>
            <Input value={this.state.upUser.re_password} onChange={(e)=>this.changeValUpUser(e,"re_password")} placeholder="" style={{ width: 148 }}  />
            <br /><br />
        </div>
    </Modal>
    {/* 确认删除吗？ */}
    <Modal
          title="提示信息"
          visible={this.state.visibleCD}
          onOk={this.handleOkCD}
          onCancel={this.handleCancelCD}
          width={'280px'}
          okText={"确定"}
          cancelText={"取消"}
        >
          <p><QuestionCircleTwoTone style={{color:'#f4c605',fontSize:"30px"}}/>&nbsp;&nbsp;&nbsp;亲,确认要删除吗？</p>
          
        </Modal>
    </div>
    )
  }
}

export default connect((state)=>{
  return {
    data:state.manger
  }
})(TableShow)