import React from 'react'
import './navlist.css'
import { Layout, Menu } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import {Link} from 'react-router-dom'
const { SubMenu } = Menu;
const { Content, Sider } = Layout;
export default class navlist extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      display:''
    }
  }

  render = () => {
    if(this.props.box === 'none'){
      this.state.display='block'
    }else{
      this.state.display='none'
    }
    return (
      <Layout>
       <Content>

      <Layout className="site-layout-background" style={{display:this.props.box}}>
        <Sider className="site-layout-background" width={220} >
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%' }}
            theme="dark"
          >
            <SubMenu key="sub1" icon={<UserOutlined />} title="项目管理">
              <Menu.Item key="1" ><Link to="/colList">栏目列表</Link></Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<LaptopOutlined />} title="文章管理">
              <Menu.Item key="5"><Link to="/articleTypeList">文章类型列表</Link></Menu.Item>
              <Menu.Item key="6"><Link to="/articleList">文章列表</Link></Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" icon={<NotificationOutlined />} title="公告管理">
              <Menu.Item key="9"><Link to="/publicType">公告类型</Link></Menu.Item>
              <Menu.Item key="10"><Link to="/publicList">公告列表</Link></Menu.Item>
            </SubMenu>
            <SubMenu key="sub4" icon={<NotificationOutlined />} title="轮播管理">
              <Menu.Item key="11">轮播列表</Menu.Item>
            </SubMenu>
            <SubMenu key="sub5" icon={<NotificationOutlined />} title="分类管理">
              <Menu.Item key="12">分类列表</Menu.Item>
            </SubMenu>
            <SubMenu key="sub6" icon={<NotificationOutlined />} title="评论管理">
              <Menu.Item key="14">评论列表</Menu.Item>
              <Menu.Item key="15">意见反馈</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
      </Layout>

      <Layout className="site-layout-background" style={{display:this.state.display}}>
        <Sider className="site-layout-background" width={220} >
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%' }}
            theme="dark"
          >
            <SubMenu key="sub7" icon={<UserOutlined />} title="会员管理">
              <Menu.Item key="16">会员列表</Menu.Item>
              <Menu.Item key="17">删除会员</Menu.Item>
              <Menu.Item key="18">等级管理</Menu.Item>
              <Menu.Item key="19">积分管理</Menu.Item>
              <Menu.Item key="20">浏览记录</Menu.Item>
              <Menu.Item key="21">分享记录</Menu.Item>
            </SubMenu>
            <SubMenu key="sub8" icon={<LaptopOutlined />} title="管理员管理">
              <Menu.Item key="22">管理员列表</Menu.Item>
              <Menu.Item key="23">角色管理</Menu.Item>
              <Menu.Item key="24">权限分类</Menu.Item>
              <Menu.Item key="25">权限管理</Menu.Item>
            </SubMenu>
            <SubMenu key="sub9" icon={<NotificationOutlined />} title="系统统计">
              <Menu.Item key="26">系统统计报表</Menu.Item>
            </SubMenu>
            <SubMenu key="sub10" icon={<NotificationOutlined />} title="系统设置">
              <Menu.Item key="27">系统设置</Menu.Item>
              <Menu.Item key="28">数字字典</Menu.Item>
              <Menu.Item key="29">屏蔽词</Menu.Item>
              <Menu.Item key="30">系统日志</Menu.Item>
              <Menu.Item key="31">友情链接</Menu.Item>
              <Menu.Item key="32">第三方登陆</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
      </Layout>
      
    </Content>
  </Layout>
    )
  }
}
