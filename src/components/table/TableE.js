import React from 'react';
import { Table} from 'antd';
import styles from './table.css';
import emitter from '../event/Ev';


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
    
    this.state={
        list:rooms.datas,
        msg:null,
    };
}
componentDidMount(){
    // 声明一个自定义事件
    // 在组件装载完成以后
    this.eventEmitter = emitter.addListener('callMe',(msg)=>{
        this.setState({
            msg
        });
    });
}
// 组件销毁前移除事件监听



    render(){
        return(
              <Table columns={columns} dataSource={this.state.list[parseInt(this.props.id)-1].room} pagination={false}/>
        );

        
      }
}

export default TableE;