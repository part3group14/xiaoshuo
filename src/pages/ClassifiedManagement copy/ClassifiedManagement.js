import React from 'react'
import style from './ClassifiedManagement.module.css'
import BreadCrumb from '../../components/BreadCrumb/index'
import Xcolok from '../../components/Xcolok/index'
import List from '../../components/list/index'
import { EditOutlined, DownloadOutlined,DeleteOutlined} from '@ant-design/icons';
import { Table, Radio, Button ,Space} from 'antd';
import Time from '../../components/Time/index'
export default class ClassifiedManagement extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list:{
                title1:"首页",
                title2:"分类管理",
                title3:"分类列表"
            },
            data: [
                {
                    key: '1',
                    PageTypeID: '1',
                    ClassiName: '玄幻',
                }
            ],
            columns:[
                {
                    title: 'ID',
                    dataIndex: 'PageTypeID',
                    align:"center"
                },
                {
                    title: '分类名',
                    dataIndex: 'ClassiName',
                    align:"center"
                },
                {
                    title: '操作',
                    dataIndex: 'operate',
                    align:"center",
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