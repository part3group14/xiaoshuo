import React from 'react'
import style from './index.module.css'
import BreadCrumb from '../../components/BreadCrumb/index'
import Xcolok from '../../components/ArtColXcolok/index'
import List from '../../components/list/index'
import { EditOutlined, DownloadOutlined, DeleteOutlined } from '@ant-design/icons';
import { Button, Space, Popconfirm } from 'antd';
import { getColumnlist, deleColumnlist } from '../../api/columnlist'
import axios from 'axios'
import ArticleColList from '../../components/ArticleColList'
export default class ColumnList extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            list: {
                title1: "首页",
                title2: "栏目管理",
                title3: "栏目列表"
            },
            title:"添加栏目列表",
            data: [],
            length:'',
            isActive:true,
            columns: [
                {
                    title: 'ID',
                    dataIndex: 'col_id',
                    align: "center"
                },
                {
                    title: '栏目名称',
                    dataIndex: 'col_name',
                    align: "center"
                },
                {
                    title: '栏目副标题',
                    dataIndex: 'col_title',
                    align: "center"
                },
                {
                    title: '关键词',
                    dataIndex: 'c_keyword',
                    align: "center"
                },
                {
                    title: '栏目缩略图',
                    dataIndex: 'c_thumb',
                    align: "center"
                },
                {
                    title: '链接',
                    dataIndex: 'c_link',
                    align: "center"
                }
                ,
                {
                    title: '描述',
                    dataIndex: 'c_description',
                    align: "center"
                }
                ,
                {
                    title: '显示状态',
                    dataIndex: 'c_status',
                    render: () => <Button type={this.state.isActive?"primary":"danger"} >显示</Button>

                }
                ,
                {
                    title: '操作',
                    dataIndex: 'operate',
                    render: (text, record, index) =>
                        <Space>
                            <Popconfirm
                                placement="topRight"
                                title="您确认要切换状态吗？"
                                onConfirm={() => this.change(record.key)}
                                okText="确认"
                                cancelText="取消"
                            >
                            <DownloadOutlined style={{ cursor: "pointer" }} />
                            </Popconfirm>
                            <Popconfirm
                                placement="topRight"
                                title="您确认要更新吗吗？"
                                onConfirm={() => this.update(record.key)}
                                okText="确认"
                                cancelText="取消"
                            >
                            <EditOutlined style={{ cursor: "pointer" }} />
                            </Popconfirm>
                            <Popconfirm
                                placement="topRight"
                                title="您确认要删除吗？"
                                onConfirm={() => this.confirm(record.col_id)}
                                okText="确认"
                                cancelText="取消"
                            >
                                <DeleteOutlined style={{ cursor: "pointer" }} />
                            </Popconfirm>
                        </Space>

                }
            ]
        }
    }
    change(index){
        // console.log(index);
        this.setState({
            isActive:!this.state.isActive
        })
        console.log(this.state.isActive);
    }
    //更新
    update(index){
        console.log(index);
    }
    async confirm(index) {
        let res=await deleColumnlist(index)
        console.log(index);
        this.getColList()
    }
    //获取列表
    async getColList() {
        let res = await getColumnlist()
        for(let i=0;i<res.data.data.length;i++){
            res.data.data[i].key = res.data.data[i].col_id
            res.data.data[i].id = res.data.data[i].col_id
        }
        this.setState({
            data: res.data.data,
            length:res.data.data.length
        })
    }
    componentWillMount() {
        this.getColList()
    }
    render = () => {
        return (
            <div className={style.box}>
                <div className={style.cnav}>
                    <BreadCrumb list={this.state.list} />
                </div>
                <div className={style.cbody}>
                    <Xcolok titl={this.state.title} length={this.state.length}/>
                    <List data={this.state.data} cols={this.state.columns}/>
                </div>
            </div>
        )
    }
}


