import  './layout.css'
import React from 'react'
import Time from './time/time'
import NavList from './Leftnav/Leftnav'
import {Route} from 'react-router-dom'
// import Home from '../pages/Home/index'
import ColumnList from '../pages/ColumnList/index'
import Dest from '../pages/Dest/dest.js'
import ArticleTypeList from '../pages/ArticleTypeList/index'
import ArticleList from '../pages/ArticleList/index'
import PublicType from '../pages/PublicType/index'
export default class layout extends React.Component {
    constructor() {
        super()
        this.state = {
            ifShows:'show',
            display:'220px',
            date: new Date(),
            box:'block',
            index:'0'
        };
         this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.setState(prevState=>({
            isToggleOn:!prevState.isToggleOn,
            display:prevState.isToggleOn?'220px':'0px'
        }))
    }
    componentDidMount() {
        this.timeID = setInterval(() => this.tick(), 1000);
      }

      componentWillUnmount() {
        clearInterval(this.timeID);
      }

      tick() {
        this.setState({
          date: new Date(),
        });
      }
      display=(e)=>{
        if(e.target.dataset.index === '1'){
            this.setState({
                box:'block'
            })
        }else{
            this.setState({
                box:'none'
            })
        }
      }

      render = () => {
        return (
            <div className='k'>
                <header>
                    <div className='header'>
                        <div className='logoBox'>
                            <a className='logo' href='index' title="logo">后台管理系统</a>
                            <div className='larrySideMenu' onClick={this.handleClick}>
                                <i className='iconfont icon-menu'></i>
                            </div>
                        </div>
                        <ul className='headUl'>
                            <li className='li'><a data-index='1' onClick={this.display}>基础设置</a></li>
                            <li className='li'><a data-index='2' onClick={this.display}>系统设置</a></li>
                        </ul>
                        <ul className='headerRight'>
                            <Time date={this.state.date}></Time>
                            <li className='xx'><i className='iconfont icon-xinxi'></i></li>
                            <li className='userItem'>
                                <img src='img/logo.png' alt=" "></img>
                            </li>
                            <li className='admin'>
                                <a>
                                    admin
                                </a>
                                <i className='iconfont icon-shang-copy'></i>
                            </li>
                            <li className='padding'>
                                <a>前台首页</a>
                            </li>
                        </ul>
                    </div>
                </header>
                <div className='content'>
                    <NavList box={this.state.box} display={this.state.display}>
                        <div className>
                            跳转的组件
                        </div>
                    </NavList>
                    <div className='right'>
                        <Route path="/" exact component={Dest}/>
                        <Route path="/colList" component={ColumnList}/>
                        <Route path="/articleTypeList" component={ArticleTypeList}/>
                        <Route path="/articleList" component={ArticleList}/>
                        <Route path="/publicType" component={PublicType}/>
                    </div>
                </div>
            </div>
        )
    }
}

