import React from 'react'
import style from './index.module.css'
import story from '../../story'
import axios from 'axios'
import {getlist} from '../../components/function/funciton.js'
import { Button, Space } from 'antd';
export default class Del extends React.Component {
    constructor(props){
        super();
        this.state={
            ...story.getState()
        }
        story.subscribe(()=>{
            let {classFiedId,dataList}=story.getState();
            this.setState({
                classFiedId,dataList
            })
        })
        this.del=this.del.bind(this);
    }
   
        async del(){
         setTimeout(() => {
            axios.delete("http://39.104.52.111:8006/delPageTypeList?book_type_id="+this.state.classFiedId)
        }, 500);
           setTimeout(()=>{
             this.getlist();
           },1000)
        
      
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

        
          setTimeout(() => {
            this.props.del(this.state.dataList)
        }, 500);
    }
    render = () => {

        return (
            <div className={style.box}>
                <div className={style.left}>
                    <Space size="small">
                        <Button type="primary" onClick={()=>this.del()} style={{ width: "110px", height: "38px", backgroundColor: "#FF5722", padding: "0 18px", border: "none", lineHeight: "38px", borderRadius: "2px" }}>批量删除</Button>
                    </Space>
                </div>
                <div className={style.right}>
                    共有数据:
        <span className={style.badge}>{this.props.num}</span>
                    条
                </div>
            </div>
        )
    }
}

