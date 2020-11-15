import React,{Component} from 'react'
import {Route} from "react-router-dom";


import Statistical from '../pages/Statistical'
import MangerList from '../pages/Manager/list'
import MangerRole from '../pages/Manager/role'
import Classify from '../pages/Manager/classify'
import AtyManger from '../pages/Manager/manager'

export default  class Home extends Component{
  render(){
    return(
      <div>
          <Route path="/Layout/Statistical" component={Statistical}/>
          <Route path="/Layout/MangerList" component={MangerList}/>
          <Route path="/Layout/MangerRole" component={MangerRole}/>
          <Route path="/Layout/Classify" component={Classify}/>
          <Route path="/Layout/AtyManger" component={AtyManger}/>
      </div>
    )
  }
}