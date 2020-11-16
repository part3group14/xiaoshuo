import React from 'react'
import axios from 'axios'
import { Modal, Form, Input, Button } from 'antd';


export default class Add extends React.Component {

    constructor(props) {
        super()
        this.state = {
            visible:false,
            id: 0
        }
        this.add=this.add.bind(this);

    }

    componentWillReceiveProps() {
        this.setState({
            visible: this.props.visible,
            id:this.props.editId,
        });
    }

    add(){
        this.props.off("x");
    }
 
    async fn(id,Email,userName,userPass,ifUserPass) {
        console.log(Email,userName,userPass,ifUserPass)

        let res=await axios({
            method:'post',
            url:`http://39.104.52.111:8006/addUser`,
            data:{
                    "username":userName,
                    "password":userPass,
                    "email": Email,
                    "password2": ifUserPass,
            }
        })
        console.log(res)

        this.props.add();
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
            this.fn(this.props.editId, values.Email, values.userName, values.userPasss, values.ifUserPass);
        };

        const onFinishFailed = errorInfo => {
            console.log('Failed:', errorInfo);
        };
        return (
            <div>
                <Modal
                    title="添加用户"
                    visible={this.props.visible}
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
                            label="邮箱"
                            name="Email"
                        >
                            <Input placeholder='aaaa@sss' />
                        </Form.Item>

                        <Form.Item
                            label="昵称"
                            name="userName"
                        >      
                            <Input placeholder='不小于六位'/>
                        </Form.Item>

                        <Form.Item
                            label="密码"
                            name="userPasss"
                        >
                            <Input  placeholder='不小于三位'/>
                        </Form.Item>

                        <Form.Item
                            label="确认密码"
                            name="ifUserPass"
                        >
                            <Input/>
                        </Form.Item>


                        <Form.Item {...tailLayout}>
                            <Button onClick={() => this.add()} type="primary" htmlType="submit">
                               添加
        </Button>
                        </Form.Item>
                    </Form>


                </Modal>
            </div>
        )
    }
}