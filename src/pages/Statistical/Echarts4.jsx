import React, { Component } from 'react'
import { EchartsWrap } from './styleStatistical'
var echarts4 = require('echarts');
export default class Echarts4 extends Component {
    componentDidMount() {

        // 基于准备好的dom，初始化echarts实例
        var myChart4 = echarts4.init(document.getElementById('fourth'));
        // 绘制图表
        myChart4.setOption({
        
            title: {
                text: '南丁格尔玫瑰图',
                left: 'center'
            },
            toolbox: {
                show: true,
                feature: {
                    mark: {show: true},
                    dataView: {show: true, readOnly: false},
                    magicType: {
                        show: true,
                        type: ['pie', 'funnel']
                    },
                    restore: {show: true},
                    saveAsImage: {show: true}
                }
            },
            series: [
                {
                    name: '半径模式',
                    type: 'pie',
                    radius: [20, 110],
                    center: ['25%', '50%'],
                    roseType: 'radius',
                    label: {
                        show: false
                    },
                    emphasis: {
                        label: {
                            show: true
                        }
                    },
                    data: [
                        {value: 10, name: 'rose1'},
                        {value: 5, name: 'rose2'},
                        {value: 15, name: 'rose3'},
                        {value: 25, name: 'rose4'},
                        {value: 20, name: 'rose5'},
                        {value: 35, name: 'rose6'},
                        {value: 30, name: 'rose7'},
                        {value: 40, name: 'rose8'}
                    ]
                },
                {
                    name: '面积模式',
                    type: 'pie',
                    radius: [30, 110],
                    center: ['75%', '50%'],
                    roseType: 'area',
                    data: [
                        {value: 10, name: 'rose1'},
                        {value: 5, name: 'rose2'},
                        {value: 15, name: 'rose3'},
                        {value: 25, name: 'rose4'},
                        {value: 20, name: 'rose5'},
                        {value: 35, name: 'rose6'},
                        {value: 30, name: 'rose7'},
                        {value: 40, name: 'rose8'}
                    ]
                }
            ]
        })

    }
    render() {
        return (
            <EchartsWrap className="col-sm-6">
                <section className="panel" style={{ width: 625 }}>
                    <div className="panel-body" style={{ width: 625 }}>
                        <div id="fourth" style={{ width: 590, height: 350 }}></div>
                    </div>
                </section>
            </EchartsWrap>

        );
    }
}


