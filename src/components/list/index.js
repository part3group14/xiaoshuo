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
                    columns={this.props.cols} 
                    dataSource={this.props.data}
                />
            </div>
        )
    }
}

