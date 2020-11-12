import React from 'react'
import './dest.css'
import axios from 'axios'
import Tb from '../../components/tb/Tb.js'
import Bintu from '../../components/bintu/Bintu'
import BarChart from '../../components/BarChart/BarChart'
export default class Dest extends React.Component {

    constructor(props) {
        super()
        this.state = {
            users:[],
            isLoaded:false,
            content:'',
            loginTime:''
        }
    }
    
    async componentDidMount(){        
        let res=await axios.get('http://localhost:3000/data');
        this.setState({
            content:res.data[0].content,
            loginTime:res.data[0].time
        })
    }

    render = () => {
        return (
            <div className='dest-body'>
                <div className='dest-body-top'>
                    <span>admin</span>
                    欢迎使用后台管理系统！v1.0 登陆次数:
                    <span>{this.state.content}</span>
                    登陆时间:
                    <span className='loginTime'>{this.state.loginTime}</span>
                </div>
                <div className='row'>
                    <ul>
                        <li>
                            <img src='img/huiyuan.png' />
                            <div className='Fright'>
                                <div>
                                    <span>23</span>
                                    <span className='Fright-w'>会员总数</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <img src='img/youqing.png' />
                            <div className='Fright'>
                                <div>
                                    <span>20</span>
                                    <span className='Fright-w'>友情连接</span>
                                </div>
                            </div>
                        </li> 
                        <li>
                            <img src='img/wenzhang.png' />
                            <div className='Fright'>
                                <div>
                                    <span>242</span>
                                    <span className='Fright-w'>文章总数</span>
                                </div>
                            </div>
                        </li> 
                        <li>
                            <img src='img/gonggao.png' />
                            <div className='Fright'>
                                <div>
                                    <span>23</span>
                                    <span className='Fright-w'>公告总数</span>
                                </div>
                            </div>
                        </li>     
                    </ul>  
                </div>
                <div className='allNum'>
                    <span>数据统计</span>
                </div>
                <div>
                    <ul className='tbnum'>
                        <li className='bg'>
                            <div className='dest-body-top'>
                                <span className="weekTitle">一周统计</span>
                            </div>
                            <Tb/>
                        </li>
                        <li className='bg'>
                            <div className='dest-body-top'>
                                <span className="weekTitle">文章类型统计</span>
                            </div>
                            <Bintu/>
                        </li>
                        <li className='bg'>
                            <div className='dest-body-top'>
                                <span className="weekTitle">文章年度统计</span>
                            </div>
                            <BarChart/>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
