import React, { Component } from 'react'
import {EchartsWrap} from './styleStatistical'
var echarts1 = require('echarts');
export default class Echarts1 extends Component {
    componentDidMount() {

        // 基于准备好的dom，初始化echarts实例
        var myChart1 = echarts1.init(document.getElementById('main'));
        // 绘制图表
        myChart1.setOption({
            type:1,
            color: ["#60c0dd", "#b5c334", "#fe8463", "#27727b", "#ffe211", "#ff8828"],
            title: {
                text: '分类文章数据统计',
                subtext: '文章总数',
                left: 'center'
            },
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: ['PHP', 'JavaScript', 'MUI', 'MySQL', 'JQuery', 'CSS']
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '60%'],
                    avoidLabelOverlap: true,//对，就是这里avoidLabelOverlap
                    data: [
                        { value: 19, name: 'PHP' },
                        { value: 5, name: 'JavaScript' },
                        { value: 2, name: 'MUI' },
                        { value: 0, name: 'MySQL' },
                        { value: 0, name: 'JQuery' },
                        { value: 0, name: 'CSS' }
                    ],
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 50,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        });

    }
    render() {
        return (
            <EchartsWrap className="col-sm-6">
                <section className="panel" style={{width: 625}}>
                    <div className="panel-heading" style={{width: 625}}>文章类型</div>
                    <div className="panel-body" style={{width: 625}}>
                        <div id="main" style={{ width:590, height: 350}}></div>
                    </div>
                </section>
            </EchartsWrap>
        );
    }
}


