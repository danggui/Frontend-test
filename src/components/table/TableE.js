import React from 'react';
import { Table} from 'antd';
import styles from './table.css';


const rooms = require('../../common/data/room.json');



const columns = [ {
    title: 'Room name',
    dataIndex: 'name',
 
  }, {
    title: 'Price (per week)',
    dataIndex: 'price',
   
  }, {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <span>
        <a href="javascript:;">
        Edit</a>
      </span>
    ),
  }];


class TableE extends React.Component{
  constructor(props){
    super(props);
}
    render(){
        return(
              <Table columns={columns} dataSource={rooms.datas[parseInt(this.props.id)-1].room} pagination={false}/>
        );

        
      }
}

export default TableE;