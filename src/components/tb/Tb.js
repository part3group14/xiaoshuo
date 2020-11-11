import React from 'react'
var echarts = require('echarts');
export default class Tb extends React.Component {

    constructor(props) {
        super()
        this.state = {
        }
    }
  componentDidMount(){        
        var myChart = echarts.init(document.getElementById('weekzxt'));
        myChart.setOption({
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['咨询', '图片', '说说', '管理员登陆记录']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: true,
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: '咨询',
                    type: 'line',
                    stack: '总量',
                    data: [5, 3, 6, 8, 3]
                },
                {
                    name: '图片',
                    type: 'line',
                    stack: '总量',
                    data: [2, 4, 6, 5, 6]
                },
                {
                    name: '说说',
                    type: 'line',
                    stack: '总量',
                    data: [3, 5, 8, 2, 4]
                },
                {
                    name: '管理员登陆记录',
                    type: 'line',
                    stack: '总量',
                    data: [5, 6, 8, 7, 9]
                }
            ]
        })
    }

    render = () => {
        return (
            <div id="weekzxt" className='' style={{height: 350}}></div>
        )
    }
}
