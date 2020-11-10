import React from 'react'
import BreadCrumb from '../../components/BreadCrumb/index'
export default class ArticleList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list:{
                title1:"首页",
                title2:"栏目管理",
                title3:"栏目列表"
            }
        }
    }

    render = () => {
        return (
            <div>
                <BreadCrumb list={this.state.list}/>
            </div>
        )
    }
}
