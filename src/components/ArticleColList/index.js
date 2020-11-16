import React from 'react';
import './style.css';
import { Form, Input, Button, Radio } from 'antd';
// import {addColumnList} from '../../api/columnlist'
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
            data: {
                "col_name": "",
                "col_title": "",
                "c_keyword": "",
                "c_thumb": "",
                "c_link": "",
                "c_description": "",
                "c_status": "",
            }
        }
    }

    onFinish = values => {
        this.setState({
            data: {
                "col_name": values.col_name,
                "col_title": values.col_title,
                "c_keyword": values.c_keyword,
                "c_thumb": values.c_thumb,
                "c_link": values.c_link,
                "c_description": values.c_description,
                "c_status": values.c_status
            }
        })
        axios.post("http://39.104.52.111:8006/addCollist",
            {
                data:{
                    "col_name": this.state.data.col_name,
                    "col_title": this.state.data.col_title,
                    "c_keyword": this.state.data.c_keyword,
                    "c_thumb": this.state.data.c_thumb,
                    "c_link": this.state.data.c_link,
                    "c_description": this.state.data.c_description,
                    "c_status": parseInt(this.state.data.c_status)
                    // "col_name":"水浒传" ,
                    // "col_title":"水浒传",
                    // "c_keyword":"水浒传",
                    // "c_link":"水浒传",
                    // "c_description":"水浒传",
                    // "c_status":1,
                    // "c_thumb":"@2019112601391587756_SMALL.png;type=image/png"
                }
            }
        ).then(function () {
            // window.location.reload()
        })
    }
    add() {
        console.log(this.state.data);
    }
    render = () => {
        return (
            <>
                <Form {...layout} name="nest-messages" onFinish={this.onFinish} validateMessages={validateMessages}>

                    <Form.Item name={['col_name']} label="栏目名称" >
                        <Input />
                    </Form.Item>
                    <Form.Item name={['col_title']} label="栏目副标题" >
                        <Input />
                    </Form.Item>
                    <Form.Item name={['c_keyword']} label="关键词" >
                        <Input/>
                    </Form.Item>
                    <Form.Item name={['c_thumb']} label="栏目缩略图" >
                    <Input type="file"/>
                    </Form.Item>
                    <Form.Item name={['c_link']} label="链接" >
                        <Input/>
                    </Form.Item>
                    <Form.Item name={['c_description']} label="描述" >
                        <Input.TextArea />
                    </Form.Item>
                    <Form.Item name={['c_status']} label="显示状态" >
                        <Input />
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