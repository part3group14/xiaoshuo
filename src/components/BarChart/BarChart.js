import React from 'react'
var echarts = require('echarts');
export default class BarChart extends React.Component {

    constructor(props) {
        super()
        this.state = {
        }
    }
  componentDidMount(){        
        var myChart = echarts.init(document.getElementById('BarChart'));
        myChart.setOption({
            color: ['rgb(193, 36, 43)'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: ['一月', '', '三月', '', '五月', '', '七月', '', '九月', '', '十一月'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: '直接访问',
            type: 'bar',
            barWidth: '60%',
            data: [10, 8, 12, 14, 10, 6, 8]
        }
    ]
        })
    }

    render = () => {
        return (
            <div id="BarChart" className='' style={{ height: 350}}></div>
        )
    }
}
