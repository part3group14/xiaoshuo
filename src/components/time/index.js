import React from 'react'
import style from './index.module.css'
import { DatePicker, Input} from 'antd';
import {SearchOutlined } from '@ant-design/icons';
export default class Time extends React.Component {
    state = {

    }
    // onChange(date, dateString) {
    //     console.log(date, dateString);
    //   }
    render = () => {
        return (
            <div className={style.layufitem}>
                <label className={style.layufolabel}>日期范围</label>
                <DatePicker style={{ height: "38px", width: "190px" }} placeholder="开始日" />
                <DatePicker style={{ height: "38px", width: "190px", marginLeft: "10px" }} placeholder="截止日" />
                <Input placeholder="请输入用户名" style={{ textIndent: "5px", height: "38px", width: "190px", marginLeft: "10px" }} />
                <button className={style.fd}>
                    <SearchOutlined style={{fontSize:"20px" }}/>
                </button>
            </div>
        )
    }
}

