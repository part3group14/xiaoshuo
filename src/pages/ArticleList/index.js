import React from 'react'
import style from './index.module.css'
import BreadCrumb from '../../components/BreadCrumb/index'
import Xcolok from '../../components/Xcolok/index'
import List from '../../components/list/index'
import { EditOutlined, DownloadOutlined, DeleteOutlined } from '@ant-design/icons';
import { Table, Radio, Button, Space } from 'antd';
import Time from '../../components/Time/index'
// import {getColumnlist} from '../../api/columnlist'
export default class ColumnList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: {
        title1: "首页",
        title2: "文章管理",
        title3: "文章列表"
      },
      data: [
        {
          key: '1',
          PageID: '1',
          PageTitle: "世界以你环环相扣",
          PageType: '小说',
          PageAuthor: 'admin',
          PageOrigin: "654321@mail.com",
          PageOrder: '3',
          PageTime:"2020-02-01 11:11:42"
        },
        {
          key: '2',
          PageID: '2',
          PageTitle: "世界以你环环相扣",
          PageType: '小说',
          PageAuthor: 'aadmin',
          PageOrigin: "612321@mail.com",
          PageOrder: '2',
          PageTime:"2020-01-01 11:11:42"
        }
      ],
      columns: [
        {
          title: 'ID',
          dataIndex: 'PageID',
          align:"center"
        },
        {
          title: '文章标题',
          dataIndex: 'PageTitle',
          align:"center"
        },
        {
          title: '文章类型',
          dataIndex: 'PageType',
          align:"center"
        },
        {
          title: '作者',
          dataIndex: 'PageAuthor',
          align:"center"
        },
        {
          title: '文章来源',
          dataIndex: 'PageOrigin',
          align:"center"
        },
        {
          title: '排序',
          dataIndex: 'PageOrder',
          align:"center"
        }
        ,
        {
          title: '录入时间',
          dataIndex: 'PageTime',
          align:"center"
        }
        ,
        {
          title: '是否置顶',
          dataIndex: 'PTopstatus',
          render: () => <Button type="primary">已启用</Button>

        }
        ,
        {
          title: '是否推荐',
          dataIndex: 'PRecommstatus',
          render: () => <Button type="primary">已启用</Button>

        }
        ,
        {
          title: '状态',
          dataIndex: 'Pstatus',
          render: () => <Button type="primary" >已启用</Button>

        }
        ,
        {
          title: '操作',
          dataIndex: 'operate',
          render: () =>
            <Space>
              <DownloadOutlined style={{ cursor: "pointer" }} />
              <EditOutlined style={{ cursor: "pointer" }} />
              <DeleteOutlined style={{ cursor: "pointer" }} />
            </Space>

        }
      ]
    }
  }
  // async componentDidMount(){
  //     let res = await getColumnlist()
  //     console.log(res.data);
  // }
  render = () => {
    return (
      <div className={style.box}>
        <div className={style.cnav}>
          <BreadCrumb list={this.state.list} />
        </div>
          <Time />
        <div className={style.cbody}>
          <Xcolok />
          <List data={this.state.data} cols={this.state.columns} className={style.lis}/>
        </div>
      </div>
    )
  }
}

