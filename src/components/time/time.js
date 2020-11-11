import React from 'react'
import style from './time.module.css';
export default class time extends React.Component {
    constructor(props) {
        super()
        this.state = {
        }
    }
    dateToString(d){
        var _y = d.getFullYear();
        var _M = d.getMonth()+1;
        var _d = d.getDate();
        var _h = d.getHours();
        var _m = d.getMinutes();
        var _s = d.getSeconds();
        var _w = d.getDay();
        var arr = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
        
        var str = "";
        str = _y+"-"+_M+"-"+_d+" "+_h+":"+_m+":"+_s+" ";
        str += arr[_w];
            
        return str;
    }
    render = () => {
        return (
            <div className={style.box}>{this.dateToString(this.props.date)}</div>
        )
    }
}
