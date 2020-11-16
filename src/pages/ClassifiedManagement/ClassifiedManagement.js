import React from 'react'
import style from './ClassifiedManagement.module.css'
import BreadCrumb from '../../components/BreadCrumb/index'
import Del from '../../components/del/index'
import Classfiedlist from '../../components/Classfiedlist/index'
import axios from 'axios'
import story from '../../story'
import {getlist} from '../../components/function/funciton.js'
import { EditOutlined, DownloadOutlined,DeleteOutlined} from '@ant-design/icons';
import {Space} from 'antd';
import ClassfiedSeach from '../../components/ClassfiedSeach/index'
import Edit from '../../components/classfL/edit/Edit'
export default class ClassifiedManagement extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            ...story.getState(),
            visible:false,
            editId:0,
            num:0,
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
                            <EditOutlined style={{cursor:"pointer"}} onClick={()=>this.edit(record.type_id)}/>
                            <DeleteOutlined style={{cursor:"pointer"}} onClick={()=>this.del(record.type_id)}/>
                        </Space>
            
                }
            ]
        }
        story.subscribe(()=>{
            let {dataList}=story.getState();
            this.setState({
                dataList:this.state.dataList
            })
        })
        this.getlist=this.getlist.bind(this)
    }
  
    async del(id){
        await axios.delete("http://39.104.52.111:8006/delPageTypeList?book_type_id="+id);
        let datax= await getlist();
        for(let i=0;i<datax.data.data.length;i++){
            datax.data.data[i].key=datax.data.data[i].type_id
        }
        this.setState({
            dataList:datax.data.data
        })
    }
    edit(id){
        this.setState({
            visible:true,
            editId:id,
        })
    }
    async getlist(){
        let datax= await getlist();
        for(let i=0;i<datax.data.data.length;i++){
            datax.data.data[i].key=datax.data.data[i].type_id
        }
        this.setState({
            dataList:datax.data.data,
            num:datax.data.data.length
        })
        // console.log(datax.data.data.length)
       
    }
    fn=(src)=>{
        this.setState({
            visible:src,
        })
    }
    componentDidMount(){
        this.getlist();
    }
    
    changeDate(str){
        console.log(str);
    }

    // async dl(){
    //     let src=await axios({
    //         url:'http://39.104.52.111:8006/superadmin_login',
    //         method:'post',
    //         data:{
    //             'username':'aaa',
    //             "password":'111111'
    //         }
    //     })
    //     console.log(src)
    //         // headers:{'content-type':'application/x-www-form-urlencoded'}},"http://39.104.52.111:8006/superadmin_login?username=aaa&password=111111")
    // }
    render = () => {
        return (
            <div className={style.box}>
                <div className={style.cnav}>
                    <BreadCrumb list={this.state.list}/>
                </div>
                <ClassfiedSeach  add={this.getlist} />
                <div className={style.cbody}>
                    {/* <button onClick={()=>this.dl()}>登陆</button> */}
                    <Del del={this.getlist} num={this.state.num}/>
                    <Classfiedlist data={this.state.dataList} cols={this.state.columns}/>
                    <Edit edit={this.getlist} fn={this.fn} editId={this.state.editId} visible={this.state.visible} />
                </div>
            </div>
        )
    }
}