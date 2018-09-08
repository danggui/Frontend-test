import React from 'react';
import { Table} from 'antd';
import styles from './table.css';




const columns = [ {
    title: 'Room name',
    dataIndex: 'name',
 
  }, {
    title: 'Price (per week)',
    dataIndex: 'price',
   
  }];


class TableS extends React.Component{
   
    render(){
      const tableList = this.props.list.map(
      (item,index)=>{
            return (
              <div key={index} className={styles.table_item}>
              <div className={styles.table_name}>{item.name}</div>
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

export default TableS;