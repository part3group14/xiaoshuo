import React from 'react';
import './style.css';
import { Form, Input, Button, Radio } from 'antd';
import {gTypeList} from '../../pages/ArticleTypeList'
import axios from 'axios'
const layout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 16 },
};

const validateMessages = {
    required: '${label} 不能为空',
    types: {
        colname: '${label} 不能为空!'
    }
};
export default class Addcolmnlist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "type_name": "",
            "up_type": "",
            "des_type": "",
            "status": "",
            "create_time": ""
        }
    }

    onFinish = values => {
        this.setState({
            "type_name": values.type_name,
            "up_type": values.up_type,
            "des_type": values.des_type,
            "status": values.status,
            "create_time": values.create_time,
        })
        axios.post("http://39.104.52.111:8006/addPageTypeList",
            {
                "type_name": this.state.type_name,
                "up_type": this.state.up_type,
                "des_type": this.state.des_type,
                "status": parseInt(this.state.status),
                "create_time": this.state.create_time,
            }
        ).then(function () {
            window.location.reload()
        })
    }
    add(){}
    render = () => {
        return (
            <>
                <Form {...layout} name="nest-messages" onFinish={this.onFinish} validateMessages={validateMessages}>

                    <Form.Item name={[ 'type_name']} label="文章类型名称" >
                        <Input />
                    </Form.Item>
                    <Form.Item name={[ 'up_type']} label="上级类型" >
                        <Input />
                    </Form.Item>
                    <Form.Item name={[ 'des_type']} label="描述" >
                        <Input initialValues="va"/>
                    </Form.Item>
                    <Form.Item name={[ 'status']} label="状态" >
                        <Input/>
                    </Form.Item>
                    <Form.Item name={[ 'create_time']} label="加入时间" >
                        <Input placeholder="2020-11-12 07:49:59" />
                    </Form.Item>
                    {/* <Form.Item name="radigroup" label="状态" rules={[{ required: true }]}>
                        <Radio.Group>
                            <Radio value="a">启用</Radio>
                            <Radio value="b">禁用</Radio>
                        </Radio.Group>
                    </Form.Item> */}
                    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 2 }}>
                        <Button type="primary" htmlType="submit" onClick={() => this.add()}>
                            保存
                            </Button>
                    </Form.Item>
                </Form>

            </>
        )
    }
}