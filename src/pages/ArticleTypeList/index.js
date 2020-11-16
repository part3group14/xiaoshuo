import React from 'react'
import style from './index.module.css'
import BreadCrumb from '../../components/BreadCrumb/index'
import Xcolok from '../../components/ArtTyXcolok/index'
import List from '../../components/list/index'
import { EditOutlined, DownloadOutlined, DeleteOutlined } from '@ant-design/icons';
import { Button, Space, Popconfirm } from 'antd';
import Time from '../../components/Time/index'
import { getarticleTypeList, delearticleTypeList, searchuserTypeList } from '../../api/articleTypeList'
import axios from 'axios'
export default class ColumnList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list: {
                title1: "首页",
                title2: "文章管理",
                title3: "文章类型列表"
            },
            title: "添加文章类型",
            data: [],
            length: '',
            columns: [
                {
                    title: 'ID',
                    dataIndex: 'type_id',
                    align: "center"
                },
                {
                    title: '文章类型名称',
                    dataIndex: 'type_name',
                    align: "center"
                },
                {
                    title: '上级类型',
                    dataIndex: 'up_type',
                    align: "center"
                },
                {
                    title: '描述',
                    dataIndex: 'des_type',
                    align: "center"
                },
                {
                    title: '加入时间',
                    dataIndex: 'create_time',
                    align: "center"
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
                    render: (text, record, index) =>
                        <Space>
                            <DownloadOutlined style={{ cursor: "pointer" }} />
                            <EditOutlined style={{ cursor: "pointer" }} />
                            <Popconfirm
                                placement="topRight"
                                title="您确认要删除吗？"
                                onConfirm={() => this.confirm(record.type_id)}
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
    async gTypeList() {
        let res = await getarticleTypeList()
        for (let i = 0; i < res.data.data.length; i++) {
            res.data.data[i].key = res.data.data[i].type_id
            res.data.data[i].id = res.data.data[i].type_id
        }
        this.setState({
            data: res.data.data,
            length: res.data.data.length
        })
    }
    async confirm(index) {
        await delearticleTypeList(index)
        console.log(index);
        this.gTypeList()
    }
    componentWillMount() {
        this.gTypeList()
        // console.log(this.state.data.splice(0,1));
    }
    //查找文章类型列表
    async subdata(str) {
        console.log("str", str);
        let res = await searchuserTypeList(str)
        console.log("res.data.data", res.data.data);
        // console.log(arr);
        // this.setState({
        //     data: arr
        // })
    }
    render = () => {
        return (
            <div className={style.box}>
                <div className={style.cnav}>
                    <BreadCrumb list={this.state.list} />
                </div>
                <div>
                    <Time subdata={this.subdata.bind(this)} />
                </div>
                <div className={style.cbody}>
                    <Xcolok titl={this.state.title} length={this.state.length} />
                    <List data={this.state.data} cols={this.state.columns} />
                </div>
            </div>
        )
    }
}

