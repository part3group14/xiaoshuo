import React from 'react';
import style from './index.module.css'
// const [selectionType, setSelectionType] = useState('checkbox');
import { Table, Radio} from 'antd';
export default class list extends React.Component {
    constructor(props) {
        // console.log(props);
        super(props)
        this.state = {
            data:'',
            columns:''
        }
    }
    componentWillMount(){
        this.setState({
            data:this.props.data,
            columns:this.props.cols
        })
        console.log(this.state.data,this.props.cols);
    }
    rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        }
    };
    render = () => {
        return (
            <div>
                <Radio.Group
                    onChange={({ target: { value } }) => {
                        // setSelectionType(value);
                    }}
                // value={selectionType}
                >

                </Radio.Group>
                <Table className={style.table}
                    pagination={false}
                    bordered
                    rowSelection
                    scroll
                    columns={this.state.columns} 
                    dataSource={this.state.data}
                />
            </div>
        )
    }
}

