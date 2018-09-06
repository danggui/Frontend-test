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
        //list:props.list,
        msg:null,
    };
}



componentDidMount () { //在组件挂载完成后声明一个自定义事件
	emitter.addListener('callMe', (msg) => {
		this.setState({
			msg: msg
    });

    alert(234);
   
	});
}

componentWillUnmount () { //组件销毁前移除事件监听
	emitter.removeListener('callMe', (msg) => {
		this.setState({
			msg: msg
		});
	});
}
 

 render(){
   
        return(
          <div>
          <Table dataSource={this.props.list} columns={columns} />
          <Room2/>
          </div>
        );

      }
      
}

export default TableE;