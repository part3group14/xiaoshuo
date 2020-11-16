import React from 'react';
import style from './index.module.css'
// const [selectionType, setSelectionType] = useState('checkbox');
import { Table, Radio} from 'antd';
export default class list extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data:'',
            columns:''
        }
    }
    rowSelection = {
        onChange: (selectedRowKeys) => {
            this.setState({
                selectedRowKeys:selectedRowKeys
            })
            
        }
    };

 
    render = () => {
        // console.log(this.props.data);
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
                    columns={this.props.cols} 
                    dataSource={this.props.data}
      
                />
            </div>
        )
    }
}

