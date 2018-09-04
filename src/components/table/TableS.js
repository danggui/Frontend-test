import React from 'react';
import { Table} from 'antd';
import styles from './table.css';


const rooms = require('../../common/data/room.json');
const data= rooms.datas[0].room;


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
        <a href="javascript:;">Delete</a>
      </span>
    ),
  }];


class TableS extends React.Component{
   

    render(){
        return(
            <div className={styles.table_list} > 
            <div className={styles.table_name}>Propertity 1</div>
                 <Table columns={columns} dataSource={data}/>
            </div>
           
        );

        
      }
}

export default TableS;