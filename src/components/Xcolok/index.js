import React from 'react'
import style from './index.module.css'
import { Button, Space } from 'antd';
export default class Xcolok extends React.Component {
    state = {
    
    }

    render = () => {
        return (
            <div className={style.box}>
                <div className={style.left}>
                    <Space size="small">
                        <Button type="primary" style={{width:"110px",height:"38px",backgroundColor:"#FF5722",padding:"0 18px",border:"none" ,lineHeight:"38px",borderRadius:"2px"}}>批量删除</Button>
                        <Button type="primary" style={{width:"82px",height:"38px" ,backgroundColor:"#2fb9d4" ,padding:"0 18px",border:"none",borderRadius:"2px"}}>添加</Button>
                    </Space>
                </div>
                <div className="right">

                </div>
            </div>
        )
    }
}

