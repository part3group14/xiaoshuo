import React from 'react'
import axios from 'axios'
import { Modal, Form, Input, Button, Checkbox } from 'antd';


export default class Edit extends React.Component {

    constructor(props) {
        super()
        this.state = {
            visible: false,
            id: 0
        }
        this.fn=this.fn.bind(this);
    }

    componentWillReceiveProps() {
        this.setState({
            visible: this.props.visible,
            id:this.props.editId,
        });
    }
 
    async fn(id,x) {
        await axios({
            headers:{
                "book-type-id": id
            },
            method:'put',
            url:`http://39.104.52.111:8006/updatePageTypeList`,
            data:{
                "type_name": x,
                "up_type": "string",
                "des_type": "string",
                "status": 0
            }
        })
        // setTimeout(() => {
        //     window.location.reload();
        // }, 500);
        // console.log(this)
        this.props.edit();
    }

    render = () => {

        const layout = {
            labelCol: { span: 8 },
            wrapperCol: { span: 16 },
        };
        const tailLayout = {
            wrapperCol: { offset: 8, span: 16 },
        };


        const onFinish = values => {
            this.fn(this.props.editId, values.password);
        };

        const onFinishFailed = errorInfo => {
            console.log('Failed:', errorInfo);
        };
        return (
            <div>
                <Modal
                    title="编辑"
                    visible={this.state.visible}
                    closable={false}
                    footer
                >
                    <Form
                        {...layout}
                        name="basic"
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                    >

             
                        <Form.Item
                            label="分类名"
                            name="password"
                        >
                            <Input />
                        </Form.Item>


                        <Form.Item {...tailLayout}>
                            <Button onClick={() => this.props.fn()} type="primary" htmlType="submit">
                                保存
        </Button>
                        </Form.Item>
                    </Form>


                </Modal>
            </div>
        )
    }
}