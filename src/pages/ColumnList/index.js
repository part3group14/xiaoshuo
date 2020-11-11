import React from 'react'
import style from './index.module.css'
import BreadCrumb from '../../components/BreadCrumb/index'
import Xcolok from '../../components/Xcolok/index'
import List from '../../components/list/index'
import { EditOutlined, DownloadOutlined,DeleteOutlined} from '@ant-design/icons';
import { Button ,Space} from 'antd';
import {getColumnlist} from '../../api/columnlist'
export default class ColumnList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list:{
                title1:"首页",
                title2:"栏目管理",
                title3:"栏目列表"
            },
            data: [],
            columns:[
                {
                    title: 'ID',
                    dataIndex: 'colID',
                    align:"center"
                },
                {
                    title: '栏目名称',
                    dataIndex: 'colName',
                    align:"center"
                },
                {
                    title: '栏目副标题',
                    dataIndex: 'colTitle',
                    align:"center"
                },
                {
                    title: '关键词',
                    dataIndex: 'keyWords',
                    align:"center"
                },
                {
                    title: '栏目缩略图',
                    dataIndex: 'thum',
                    align:"center"
                },
                {
                    title: '链接',
                    dataIndex: 'link',
                    align:"center"
                }
                ,
                {
                    title: '描述',
                    dataIndex: 'description',
                    align:"center"
                }
                ,
                {
                    title: '显示状态',
                    dataIndex: 'status',
                    render: () => <Button type="primary">显示</Button>
            
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
    async componentWillMount(){
        let res = await getColumnlist()
        let arr=[]
        for(let i=0;i<res.data.length;i++){
            arr.push(res.data[i])
                this.setState({
                    data:arr
                })
        }
        // console.log(res.data[0]);
        console.log(this.state.data);
    }
    render = () => {
        return (
            <div className={style.box}>
                <div className={style.cnav}>
                    <BreadCrumb list={this.state.list}/>
                </div>
                <div className={style.cbody}>
                    <Xcolok />
                    <List data={this.state.data} cols={this.state.columns}/>
                </div>
            </div>
        )
    }
}

