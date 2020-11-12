import React from 'react'
import style from './index.module.css'
import { Button, Space } from 'antd';
export default class Del extends React.Component {
    state = {

    }

    render = () => {
        return (
            <div className={style.box}>
                <div className={style.left}>
                    <Space size="small">
                        <Button type="primary" style={{ width: "110px", height: "38px", backgroundColor: "#FF5722", padding: "0 18px", border: "none", lineHeight: "38px", borderRadius: "2px" }}>批量删除</Button>
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

