import React from 'react'
import style from './index.module.css'
import BreadCrumb from '../../components/BreadCrumb/index'
import Xcolok from '../../components/Xcolok/index'
import List from '../../components/list/index'
import { EditOutlined, DownloadOutlined,DeleteOutlined} from '@ant-design/icons';
import { Table, Radio, Button ,Space} from 'antd';
import Time from '../../components/Time/index'
// import {getColumnlist} from '../../api/columnlist'
export default class ColumnList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list:{
                title1:"首页",
                title2:"文章管理",
                title3:"文章类型列表"
            },
            data: [
                {
                    key: '1',
                    PageTypeID: '1',
                    PageTypeName: "小说",
                    PageTypeTitle: '玄幻',
                    PageTypeOrder: '12@mail.com',
                    PageTypeDescription: "北京市",
                    PageTypeTime: '2020-01-01 11:11:42',
                },
                 {
                    key: '2',
                    PageTypeID: '2',
                    PageTypeName: "小说",
                    PageTypeTitle: '武侠',
                    PageTypeOrder: '13@mail.com',
                    PageTypeDescription: "北京市",
                    PageTypeTime: '2020-02-01 11:11:42',
                }, 
                {
                    key: '3',
                    PageTypeID: '3',
                    PageTypeName: "小说",
                    PageTypeTitle: '动漫',
                    PageTypeOrder: '14@mail.com',
                    PageTypeDescription: "北京市",
                    PageTypeTime: '2020-02-01 11:11:42',
                }
            ],
            columns:[
                {
                    title: 'ID',
                    dataIndex: 'PageTypeID',
                    align:"center"
                },
                {
                    title: '文章类型名称',
                    dataIndex: 'PageTypeName',
                    align:"center"
                },
                {
                    title: '上级类型',
                    dataIndex: 'PageTypeTitle',
                    align:"center"
                },
                {
                    title: '排序',
                    dataIndex: 'PageTypeOrder',
                    align:"center"
                },
                {
                    title: '描述',
                    dataIndex: 'PageTypeDescription',
                    align:"center"
                },
                {
                    title: '加入时间',
                    dataIndex: 'PageTypeTime',
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
    // async componentDidMount(){
    //     let res = await getColumnlist()
    //     console.log(res.data);
    // }
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

