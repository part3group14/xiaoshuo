import React from 'react'
import style from './index.module.css'
import axiox from 'axios'
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
                title3:"会员列表"
            },
            data: [
                {
                    key: '3',
                    uid: '3',
                    UserName: "六分",
                    Sex: '男',
                    Phone:'15615591651651',
                    Emial: '14@mail.com',
                    Address: "北京市",
                    PageTypeTime: '2020-02-01 11:11:42',
                }
            ],
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
                    render: () =>
                        <Space>
                            <DownloadOutlined style={{cursor:"pointer"}} />
                            <EditOutlined style={{cursor:"pointer"}}/>
                            <DeleteOutlined style={{cursor:"pointer"}}/>
                        </Space>
            
                }
            ]
        }

    }
    async componentDidMount(){
        let res = await axiox.get('http://39.104.52.111:8006/userList')
        for(let i=0;i<res.data.msg.length;i++){
            res.data.msg[i].key=res.data.msg[i].uid
        }
        console.log(res.data.msg)
        this.setState({
            data:res.data.msg
        })
    }
    render = () => {
        return (
            <div className={style.box}>
                <div className={style.cnav}>
                    <BreadCrumb list={this.state.list}/>
                </div>
                <div>
                    <Time/>
                </div>
                <div className={style.cbody}>
                    <Xcolok />
                    <List data={this.state.data} cols={this.state.columns}/>
                </div>
            </div>
        )
    }
}

