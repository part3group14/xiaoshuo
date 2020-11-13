import React from 'react'
import style from './ClassifiedManagement.module.css'
import BreadCrumb from '../../components/BreadCrumb/index'
import Del from '../../components/del/index'
import Classfiedlist from '../../components/Classfiedlist/index'
import axios from 'axios'
import {getlist} from '../../components/function/funciton.js'
// import {getDatex} from '../../qingqiu/classfied.js'
import { EditOutlined, DownloadOutlined,DeleteOutlined} from '@ant-design/icons';
import {Space} from 'antd';
import ClassfiedSeach from '../../components/ClassfiedSeach/index'
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
                    dataIndex: 'type_id',
                    align:"center"
                },
                {
                    title: '分类名',
                    dataIndex: 'type_name',
                    align:"center"
                },
                {
                    title: '操作',
                    dataIndex: 'operate',
                    align:"center",
                    render: (text,record) =>
                        <Space>
                            <DownloadOutlined style={{cursor:"pointer"}} />
                            <EditOutlined style={{cursor:"pointer"}}/>
                            <DeleteOutlined style={{cursor:"pointer"}} onClick={()=>this.del(record.type_id)}/>
                        </Space>
            
                }
            ]
        }
    }
    async del(id){
        await axios.delete("http://39.104.52.111:8006/delPageTypeLIst?book_type_id="+id);
        let datax= await getlist();
        for(let i=0;i<datax.data.data.length;i++){
            datax.data.data[i].key=datax.data.data[i].type_id
        }
        this.setState({
            data:datax.data.data
        })
    }
    async getlist(){
        let datax= await getlist();
        for(let i=0;i<datax.data.data.length;i++){
            datax.data.data[i].key=datax.data.data[i].type_id
        }
        this.setState({
            data:datax.data.data
        })
       
    }
    componentDidMount(){
        this.getlist();
    }
    
    changeDate(str){
        console.log(str);
    }

    render = () => {
        
        return (
            <div className={style.box}>
                <div className={style.cnav}>
                    <BreadCrumb list={this.state.list}/>
                </div>
                <ClassfiedSeach />
                <div className={style.cbody}>
                    <Del/>
                    <Classfiedlist data={this.state.data} cols={this.state.columns}/>
                </div>
            </div>
        )
    }
}