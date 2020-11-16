import React from 'react'
import style from './index.module.css'
import axios from 'axios'
import BreadCrumb from '../../components/BreadCrumb/index'
import Xcolok from '../../components/Xcolok/index'
import List from '../../components/list/index'
import { EditOutlined, DownloadOutlined,DeleteOutlined} from '@ant-design/icons';
import {Button ,Space} from 'antd';
import Time from '../../components/Time/index'
// import {getColumnlist} from '../../api/columnlist'
export default class ColumnList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list:{
                title1:"首页",
                title2:"会员管理",
                title3:"会员列表",
                num:0
            },
            data: [],
            columns:[
                {
                    title: 'ID',
                    dataIndex: 'uid',
                    align:"center"
                },
                {
                    title: '用户名',
                    dataIndex: 'user_name',
                    align:"center"
                },
                {
                    title: '性别',
                    dataIndex: 'sex',
                    align:"center"
                },
                {
                    title: '手机',
                    dataIndex: 'phone',
                    align:"center"
                },
                {
                    title: '邮箱',
                    dataIndex: 'email',
                    align:"center"
                },
                {
                    title:'地址',
                    dataIndex:'address',
                    align:"center"
                },
                {
                    title: '加入时间',
                    dataIndex: 'start_time',
                    align:"center"
                }
                ,
                {
                    title: '状态',
                    dataIndex: 'status',
                    render: () => <Button type="primary">已启用</Button>
            
                }
                ,
                {
                    title: '操作',
                    dataIndex: 'operate',
                    render: (text,record) =>
                        <Space>
                            <DownloadOutlined style={{cursor:"pointer"}} />
                            <EditOutlined style={{cursor:"pointer"}}/>
                            <DeleteOutlined onClick={()=>this.del(record.uid)} style={{cursor:"pointer"}}/>
                        </Space>
            
                }
            ]
        }
        this.getList=this.getList.bind(this);
        this.del=this.del.bind(this);
    }
    componentWillMount(){
        this.getList();
    }
    async del(id){
        let res=await axios({
            method:'DELETE',
            url:`http://39.104.52.111:8006/deleteUser`,
            data:id
        })
        this.getList();
    }
    async getList(){
        let res = await axios.get('http://39.104.52.111:8006/userList')
        for(let i=0;i<res.data.msg.length;i++){
            res.data.msg[i].key=res.data.msg[i].uid
        }

        this.setState({
            data:res.data.msg,
            num:res.data.msg.length
        })
    }
    render = () => {
        return (
            <div className={style.box}>
                <div className={style.cnav}>
                    <BreadCrumb list={this.state.list}/>
                </div>
                <div className={style.top}>
                    {/* <Time/> */}
                </div>
                <div className={style.cbody}>
                    <Xcolok num={this.state.num} add={this.getList} />
                    <List data={this.state.data} cols={this.state.columns}/>
                </div>
            </div>
        )
    }
}

