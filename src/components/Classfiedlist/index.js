import React from 'react';
import style from './index.module.css'
// const [selectionType, setSelectionType] = useState('checkbox');
import story from '../../story'
import { Table} from 'antd';
export default class Classfiedlist extends React.Component {
    constructor(props) {
        // console.log(props);
        super(props)
        this.state = {
            ...story.getState(),
            data:'',
            columns:''
        }
        story.subscribe(()=>{
            let {classFiedId}=story.getState();
            this.setState({
                classFiedId
            })
        })
    }
    
    getclassFiedId(){
        story.dispatch({
            type:'getclassFiedId',
            payload:this.state.classFiedId
        })
    }
    
    render = () => {
        const rowSelection={
            onChange:(selectedRowKeys)=>{
                this.setState({
                    classFiedId:selectedRowKeys.map(Number),
                   selectedRowKeys
               })
               setTimeout(() => {
                   this.getclassFiedId()
               }, 500);
           }
        }
        return (
            <div>
                <Table className={style.table}
                    pagination={false}
                    bordered
                    rowSelection={rowSelection}
                    scroll
                    columns={this.props.cols} 
                    dataSource={this.props.data}
                    rowKey={record=>record.key}
                />
            </div>
        )
    }
}

