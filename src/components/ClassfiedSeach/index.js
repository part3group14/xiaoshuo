import React from 'react'
import style from './index.module.css'
import {Input} from 'antd';
import { Button, Space } from 'antd';
import { PlusCircleOutlined} from '@ant-design/icons';
export default class Time extends React.Component {
    state = {

    }
    // onChange(date, dateString) {
    //     console.log(date, dateString);
    //   }
    render = () => {
        return (
            <div className={style.layufitem}>
                <label className={style.layufolabel}>所属分类</label>
                <Input placeholder="分类名" style={{textIndent: "5px", height: "38px", width: "190px", marginLeft: "10px" }} />
                <div className={style.button}>
                     <Button type="primary" style={{ width: "82px", height: "38px", backgroundColor: "#2fb9d4", padding: "0 18px", border: "none", borderRadius: "2px" }}>
                            <PlusCircleOutlined />
                            添加
                       </Button>
                </div>
            </div>
        )
    }
}

