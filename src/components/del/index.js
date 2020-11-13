import React from 'react'
import style from './index.module.css'
import story from '../../story'
import axios from 'axios'
import { Button, Space } from 'antd';
export default class Del extends React.Component {
    constructor(props){
        super();
        this.state={
            ...story.getState()
        }
        story.subscribe(()=>{
            let {classFiedId}=story.getState();
            this.setState({
                classFiedId
            })
        })
    }
   
    del=()=>{
         setTimeout(() => {
            axios.delete("http://39.104.52.111:8006/delPageTypeLIst?book_type_id="+this.state.classFiedId)
        }, 500);
        setTimeout(() => {
            window.location.reload();
        }, 1000);
    }
    render = () => {
        return (
            <div className={style.box}>
                <div className={style.left}>
                    <Space size="small">
                        <Button type="primary" onClick={this.del} style={{ width: "110px", height: "38px", backgroundColor: "#FF5722", padding: "0 18px", border: "none", lineHeight: "38px", borderRadius: "2px" }}>批量删除</Button>
                    </Space>
                </div>
                <div className={style.right}>
                    共有数据:
                    <span className={style.badge}>66</span>
                    条
                </div>
            </div>
        )
    }
}

