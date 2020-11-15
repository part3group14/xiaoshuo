import React,{Component} from 'react'
import { Table,Radio,Input,Modal } from 'antd';
import { EditOutlined,DeleteOutlined,QuestionCircleTwoTone,PlusCircleOutlined} from '@ant-design/icons';
import BreadCrumb from '../../../components/BreadCrumb'
import store from '../../../store';
import {getAllClassify,getClassify} from '../../../utils/manger'
import {NewsBar} from '../../../components/manger/styledCom'
import {Clissify,RangeWrap} from '../styledManger'

export default class Classify extends Component{
  constructor(props) {
    super(props)
    this.state = {
      dataSource:[],
      visible5:false,
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
          dataIndex: 'per_class_id',
          render: (text) => <a>{text}</a>,
          align:'center'
        },
        {
          title: '分类名',
          dataIndex: 'per_class_name',
          align:'center'
        },
        {
          title: '操作',
          dataIndex: 'use',
          align:'center',
          render: (text,record,index) =>{return(
          <>
            <EditOutlined onClick={()=>this.showModal5(index)}/>
            &nbsp;&nbsp;&nbsp;
            <DeleteOutlined onClick={this.showModalCD}/>
          </>)} 
        },
      ],
      upIdx:-1,
      upClassify:{
        per_class_id:"",
        per_class_name:"",
        note:""
      },
      data:[
      ],// rowSelection object indicates the need for row selection
      per_class_id:""
    }
  }
  // 封装权限分类
  getAllClassifyData(){
    getAllClassify().then(res=>{
      this.setState({
        dataSource:res.data.role_info
      })
    })
  }
  // 权限分类页所有数据
  componentDidMount(){
    this.getAllClassifyData()
  }
  changeClassifyVal(e,key){
    this.setState({
      [key]:e.target.value
    })
    console.log(this.state.per_class_id)
  }
  // 查询权限分类
  findClassify(){
    getClassify(this.state.per_class_id).then(res=>{
      console.log(res.data.role_info)
      this.setState({
        dataSource:res.data.role_info
      })
    })
  }
  
  // Table
  showModal5 = (index) => {
    console.log(index);  
    this.setState({
        visible5: true,
        upIdx:index,
        upClassify:{...this.state.dataSource[index]}
    });
  };
  // 编辑权限分类
  classifyUpUser(e,key){
    this.setState({
      upClassify:{
        ...this.state.upClassify,
        [key]:e.target.value
      }
    })
  }
  handleOk5 = e => {
      // console.log(this.state.upIdx);
      this.setState({
          visible5: false,
      });
  };
  handleCancel5 = e => {
      // console.log(e);
      this.setState({
          visible5: false,
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
          <RangeWrap>日期范围</RangeWrap>
          <Input placeholder="分类名" style={{width:"190px"}} value={this.state.per_class_id} onChange={(e)=>this.changeClassifyVal(e,"per_class_id")}/>
          <PlusCircleOutlined className="btn" onClick={this.findClassify} />
        </div>
        
        <NewsBar>
        <button className="layui-btn layui-btn-danger" onClick={()=>this.delRoles()}>
      <DeleteOutlined />批量删除
      </button>
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
        rowKey="per_class_id"
      />
      <Modal 
        title="编辑" 
        visible={this.state.visible5} 
        onOk={this.handleOk5}
        onCancel={this.handleCancel5}
        okText={"保存"}
        cancelText={"取消"}
      >
        <div className="modelP"><br />
            <span>连接名&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <Input placeholder="" style={{ width: 148 }} value={this.state.upClassify.per_class_id} onChange={(e)=>this.classifyUpUser(e,"per_class_id")}/>
            <br /><br />
            <span>URL&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <Input placeholder="" style={{ width: 148 }} value={this.state.upClassify.per_class_name} onChange={(e)=>this.classifyUpUser(e,"per_class_name")} />
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
