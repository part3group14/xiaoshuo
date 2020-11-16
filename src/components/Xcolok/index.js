import React from 'react'
import style from './index.module.css'
import { Button, Space } from 'antd';
import { PlusCircleOutlined} from '@ant-design/icons';
import Add from '../../components/VIPgl/Add'

export default class Xcolok extends React.PureComponent {
    constructor(props){
        super()
        this.state = {
            visible:false,
            editId:0
        }
        this.off=this.off.bind(this);
        this.add=this.add.bind(this);

    }
    

    off(){
        this.setState({
            visible:false
        })
    }

    onss(){
        this.setState({
            visible:true
        })
    }
    add(){
        this.props.add();
    }
    render = () => {
        console.log(this.state.visible)
        return (
            <div className={style.box}>
                <div className={style.left}>
                    <Space size="small">
                        <Button type="primary" style={{ width: "110px", height: "38px", backgroundColor: "#FF5722", padding: "0 18px", border: "none", lineHeight: "38px", borderRadius: "2px" }}>批量删除</Button>
                        <Button onClick={()=>this.onss()} type="primary" style={{ width: "82px", height: "38px", backgroundColor: "#2fb9d4", padding: "0 18px", border: "none", borderRadius: "2px" }}>
                            <PlusCircleOutlined />
                            添加
                        </Button>
                    </Space>
                </div>
                <Add add={this.add} off={this.off} editId={this.state.editId} visible={this.state.visible} />
                <div className={style.right}>
                    共有数据:
                     <span className={style.badge}>{this.props.num}</span>
                    条
                </div>
            </div>
        )
    }
}

