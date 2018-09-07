import React from 'react';
import { Table} from 'antd';
import {Room,Room2} from '../room/Room';
import styles from './table.css';
import emitter from '../event/Ev';






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
    this.state={
    
    };
   
}

 render(){
   
        return(
          <div>
          <Table dataSource={this.props.list} columns={columns} />
          <Room2 id={this.props.id}/>
          </div>
        );

      }
      
}

export default TableE;