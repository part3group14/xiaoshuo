import { Table, Tag, Space } from 'antd';
import './index.css'
import React from 'react'
export default class list extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                {
                    key: '1',
                    name: 'John Brown',
                    age: 32,
                    address: 'New York No. 1 Lake Park',
                    tags: ['nice', 'developer'],
                },
                {
                    key: '2',
                    name: 'Jim Green',
                    age: 42,
                    address: 'London No. 1 Lake Park',
                    tags: ['loser'],
                },
                {
                    key: '3',
                    name: 'Joe Black',
                    age: 32,
                    address: 'Sidney No. 1 Lake Park',
                    tags: ['cool', 'teacher'],
                },
            ],
            columns: [
                {
                    title: 'ID',
                    dataIndex: 'name',
                    key: 'name',
                },
                {
                    title: '栏目名称',
                    dataIndex: 'age',
                    key: 'age',
                },
                {
                    title: '栏目副标题',
                    dataIndex: 'address',
                    key: 'address',
                },
                {
                    title: '关键词',
                    dataIndex: 'address',
                    key: 'address',
                },
                {
                    title: '栏目缩略图',
                    dataIndex: 'address',
                    key: 'address',
                },
                {
                    title: '链接',
                    dataIndex: 'address',
                    key: 'address',
                },
                {
                    title: '描述',
                    dataIndex: 'address',
                    key: 'address',
                },
                {
                    title: '显示状态',
                    dataIndex: 'address',
                    key: 'address',
                },
                {
                    title: '操作',
                    dataIndex: 'address',
                    key: 'address',
                }
                
            ]
        }
    }

    render = () => {
        return (
            <div>
                <Table columns={this.state.columns} dataSource={this.state.data} />
            </div>
        )
    }
}

