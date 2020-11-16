import React from 'react'
import style from './index.module.css'
import {Input} from 'antd'
import axios from 'axios'
import { Button} from 'antd';
import { PlusCircleOutlined} from '@ant-design/icons';
export default class ClassfiedSeach extends React.Component {
    constructor(props) {
        super()
        this.state = {
            x:'',
            data:'1232'
        }
        this.add=this.add.bind(this);
    }
    changeVal(e){
        this.setState({
            x:e.target.value
        });
    }
    async add(){
        await axios.post('http://39.104.52.111:8006/addPageTypeList',
            {
            "type_name": this.state.x,
            "up_type": "string",
            "des_type": "string",
            "status": 0,
            "create_time": "2020-11-12 07:49:59"
            }
        )
        this.props.add();
    }

    render = () => {
        return (
            <div className={style.layufitem}>
                <label className={style.layufolabel}>所属分类</label>
                <Input  onChange={(e)=>this.changeVal(e)} placeholder="分类名" style={{textIndent: "5px", height: "38px", width: "190px", marginLeft: "10px" }} />
                <div className={style.button}>
                     <Button type="primary" style={{ width: "82px", height: "38px", backgroundColor: "#2fb9d4", padding: "0 18px", border: "none", borderRadius: "2px" }} onClick={()=>this.add()}>
                            <PlusCircleOutlined />
                            添加
                       </Button>
                </div>
            </div>
        )
    }
}

