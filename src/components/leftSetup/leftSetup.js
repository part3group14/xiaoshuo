import React from 'react'
import style from './leftSetup.module.css'
import Layou from './Layou.js'
export default class leftSetup extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            wz:['项目管理','文章管理','公告管理','轮播管理','分类管理','评论管理']
        }
    }
 
    render = () => {
        return (
            <div style={{ width: this.props.display }} className={style.box}>
                <div className={style.n}> 
                <div className={style.userImg}>
                    <a className={style.userA}>
                        <img src='img/logo.png' className={style.img}></img>
                    </a>
                    <p>你好！admin，欢迎回来</p>
                </div>
                <div>
                    <Layou box={this.props.box}></Layou>
                </div>
                </div>
            </div>
        )

    }
}
