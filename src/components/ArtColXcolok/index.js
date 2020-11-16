import React from 'react'
import style from './index.module.css'
import { Button, Space, Modal } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import ArticleColList  from '../ArticleColList/index'
import { deleColumnlist } from '../../api/columnlist'
export default class Xcolok extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: {
                title1: "首页",
                title2: "栏目管理",
                title3: "栏目列表"
            },
            title:props.titl,
            visible: false,
            delid:this.props.getdata
        };
    }
    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = e => {
        // console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        // console.log(e);
        this.setState({
            visible: false,
        });
    };
    // 执行回调函数
    okFunc = () => {
        this.closeFunc();
        if (typeof this.props.callbackFunc === "function") {
            this.props.callbackFunc();
        }
    }

    // 关闭弹窗
    closeFunc = () => {
        this.setState({
            show: false
        })
    }


    render = () => {
        return (
            <div className={style.box}>
                <div className={style.left}>
                    <Space size="small">
                        <Button type="primary" style={{ width: "110px", height: "38px", backgroundColor: "#FF5722", padding: "0 18px", border: "none", lineHeight: "38px", borderRadius: "2px" }} >批量删除</Button>
                        <Button type="primary" style={{ width: "82px", height: "38px", backgroundColor: "#2fb9d4", padding: "0 18px", border: "none", borderRadius: "2px" }} onClick={this.showModal}>
                            <PlusCircleOutlined />
                            添加
                        </Button>
                        <Modal
                            title={this.state.title}
                            visible={this.state.visible}
                            onOk={this.handleOk}
                            onCancel={this.handleCancel}
                            footer
                            
                        >
                            <ArticleColList/>
                        </Modal>
                    </Space>
                </div>
                <div className={style.right}>
                    共有数据:
        <span className={style.badge}>{this.props.length}</span>
                    条
                </div>
            </div>
        )
    }
}

