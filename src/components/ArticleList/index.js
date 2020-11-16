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
                "book_name": "",
                "book_type": "",
                "author": "",
                "origin": "",
                "topstatus": "",
                "recommend": "",
                "status": "",
            }
        }
    }

    onFinish = values => {
        this.setState({
            data: {
                "book_name": values.book_name,
                "book_type": values.book_type,
                "author": values.author,
                "origin": values.origin,
                "topstatus": values.topstatus,
                "recommend": values.recommend,
                "status": values.status
            }
        })
        axios.post("http://39.104.52.111:8006/addPageList",
            {
                data:{
                    "book_name": this.state.data.book_name,
                    "book_type": this.state.data.book_type,
                    "author": this.state.data.author,
                    "origin": this.state.data.origin,
                    "topstatus": parseInt(this.state.data.topstatus),
                    "recommend": parseInt(this.state.data.recommend),
                    "status": parseInt(this.state.data.status)
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

                    <Form.Item name={['book_name']} label="文章标题" >
                        <Input />
                    </Form.Item>
                    <Form.Item name={['book_type']} label="文章类型" >
                        <Input />
                    </Form.Item>
                    <Form.Item name={['author']} label="作者" >
                        <Input />
                    </Form.Item>
                    <Form.Item name={['origin']} label="文章来源" >
                    <Input/>
                    </Form.Item>
                    <Form.Item name={['topstatus']} label="是否置顶" >
                        <Input/>
                    </Form.Item>
                    <Form.Item name={['recommend']} label="是否推荐" >
                        <Input />
                    </Form.Item>
                    <Form.Item name={['status']} label="状态" >
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