import React, { Component } from 'react'
import {StatistWrap} from './styleStatistical'

import Echarts1 from './Echarts1'
import Echarts2 from './Echarts2'
import Echarts3 from './Echarts3'
import Echarts4 from './Echarts4'
export default class Statistical extends Component {
  render() {
    return (
      <StatistWrap>
        <div className="layui-tab layui-tab-card site-demo-title x-main" lay-filter="x-tab" lay-allowclose="true" style={{left:'220px',borderLeft:'solid 2px #2299ee'}}>
          <div className="x-nav">
            <a className="layui-btn layui-btn-small" style={{lineHeight:'1.6em',marginTop:'3px',float:'right'}} title="刷新" href=''>
              <i className="layui-icon icon-shuaxin iconfont" style={{lineHeight:'30px'}}></i>
            </a>
          </div>
          <div className="layui-tab-content site-demo site-demo-body">
            <Echarts1/>
            <Echarts2/>
            <Echarts3/>
            <Echarts4/>
          </div>
        </div>
      </StatistWrap>
    )
  }
}