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
        <a href="javascript:;">Delete</a>
      </span>
    ),
  }];


class TableE extends React.Component{
   
    render(){
      const tableList = rooms.datas.map(
      (item,index)=>{
            return (
              <div key={index} className={styles.table_item}>
              <div className={styles.table_name}>{item.hotel_name}</div>
                 <Table columns={columns} dataSource={item.room} pagination={false}/>
             </div>
            );
          }
      );
        return(
            <div className={styles.table_list} > 
                {tableList}
             </div>
           
        );

        
      }
}

export default TableE;