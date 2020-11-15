import React, { Component } from 'react'
import { EchartsWrap } from './styleStatistical'
var echarts3 = require('echarts');
export default class Echarts3 extends Component {
    componentDidMount() {

        // 基于准备好的dom，初始化echarts实例
        var myChart3 = echarts3.init(document.getElementById('third'));
        // 绘制图表
      
        myChart3.setOption({
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            title: {
                text: '文章年度统计',
                left: 'center'
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
                    data: ['一月', '', '三月', '', '五月', '', '七月', '', '九月', '', '十一月', ''],
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
                    name: '发布量',
                    type: 'bar',
                    barWidth: '60%',
                    data: [10,14,8,6,9,6,12,3,7,10,7,6],
                    itemStyle: {
                        normal: {
            　　　　　　　　//这里是重点
                            color: function(params) {
                                //注意，如果颜色太少的话，后面颜色不会自动循环，最好多定义几个颜色
                                var colorList = ["#60c0dd", "#b5c334", "#fe8463", "#27727b", "#ffe211", "#ff8828","#60c0dd", "#b5c334", "#fe8463", "#27727b", "#ffe211", "#ff8828"];
                                return colorList[params.dataIndex]
                            }
                        }
                    }
                }
            ]
        });

    }
    render() {
        return (
            <EchartsWrap className="col-sm-6">
                <section className="panel" style={{ width: 625 }}>
                   
                    <div className="panel-body" style={{ width: 625 }}>
                        <div id="third" style={{ width: 590, height: 350 }}></div>
                    </div>
                </section>
            </EchartsWrap>

        );
    }
}


