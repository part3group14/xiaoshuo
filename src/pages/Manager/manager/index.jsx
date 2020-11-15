import React,{Component} from 'react'
import { Table,Radio,Input,Modal } from 'antd';
import { EditOutlined,DeleteOutlined,QuestionCircleTwoTone,PlusCircleOutlined} from '@ant-design/icons';
import BreadCrumb from '../../../components/BreadCrumb'
import CaseBar from '../../../components/manger/caseBar'
import store from '../../../store';
import {updateAsync} from '../../../store/action'
import {getAllAuth} from '../../../utils/manger'
import {Clissify,RangeWrap} from '../styledManger'

export default class AtyManger extends Component{
  constructor(props) {
    super(props)
    this.state = {
      dataSource:[],
      visible2:false,
      visibleCD:false,
      selectionType:'checkbox',
      deleteId:[],
      list:{
        title1:"首页",
        title2:"会员管理",
        title3:"角色管理"
      },
      columns:[
        {
          title: 'ID',
          dataIndex: 'per_id',
          render: (text) => <a>{text}</a>,
          align:'center'
        },
        {
          title: '权限规则',
          dataIndex: 'per_rule',
          align:'center'
        },
        {
          title: '权限名称',
          dataIndex: 'per_name',
          align:'center'
        },
        {
          title: '所属分类',
          dataIndex: 'per_class',
          align:'center'
        },
        {
          title: '操作',
          dataIndex: 'use',
          align:'center',
          render: (text,index) =>{return(
          <>
            <EditOutlined onClick={()=>this.showModal2(index)}/>
            &nbsp;&nbsp;&nbsp;
            <DeleteOutlined onClick={this.showModalCD}/>
          </>)} 
        }
      ],
      data:[
      ],// rowSelection object indicates the need for row selection
    }
  }
  componentDidMount(){
    getAllAuth().then(res=>this.setState({
      dataSource:res.data.role_info
    }))
  }

  // Table
  showModal2 = (index) => {
    console.log(index);  
    this.setState({
        visible2: true,
    });
  };
  handleOk2 = e => {
      // console.log(this.state.upIdx);
      this.setState({
          visible2: false,
      });
     store.dispatch(updateAsync(this.state.id))
  };
  handleCancel2 = e => {
      // console.log(e);
      this.setState({
          visible2: false,
      });
  };
  showModalCD = (index) => {
    this.setState({
      visibleCD: true,
    });
  };

  handleOkCD = e => {
    console.log(e);
    this.setState({
      visibleCD: false,
    });
  };

  handleCancelCD = e => {
    console.log(e);
    this.setState({
      visibleCD: false,
    });
  };

  render(){
    return(
      <Clissify>
        <BreadCrumb list={this.state.list}/>
        <div className='searchInput'>
          <Input placeholder="角色" style={{width:"190px"}} />
          <Input placeholder="模块/控制器/方法" style={{width:"190px"}} />
          <Input placeholder="权限名称" style={{width:"190px"}} />
          <PlusCircleOutlined className="btn" />
        </div>
        <CaseBar deleteId={this.state.deleteId}></CaseBar>
        
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
        rowKey="id"
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
            <span>登录名&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <Input placeholder="" style={{ width: 148 }} />
            <br /><br />
            <span>手机&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <Input placeholder="" style={{ width: 148 }} />
            <br /><br />
            <span>邮箱&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <Input placeholder="" style={{ width: 148 }}  />
            <br /><br />
            <span>角色&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <Input placeholder="" style={{ width: 148 }}  />
            <br /><br />
            <span>密码&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <Input placeholder="" style={{ width: 148 }} />
            <br /><br />
            <span>确认密码&nbsp;</span>
            <Input placeholder="" style={{ width: 148 }}  />
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
      </Clissify>
    )
  }
}
