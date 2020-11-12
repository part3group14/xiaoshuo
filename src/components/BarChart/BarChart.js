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
            data: [10, 8, 12, 14, 10, 6, 8,7,15,9,5,6],
            itemStyle: {
                normal: {
                    color: function(params) {
                        var colorList = ['rgb(193, 36, 43)','rgb(180, 194, 57)','rgb(252, 206, 31)','rgb(232, 124, 40)','rgb(39, 114, 123)','rgb(254, 132, 100)','rgb(154, 202, 101)','rgb(250, 216, 99)','rgb(118, 192, 215)','rgb(215, 80, 75)','rgb(197, 228, 123)'];
                        return colorList[params.dataIndex]
                    }
                }
            }
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
