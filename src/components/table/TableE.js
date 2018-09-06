import React from 'react';
import { Table} from 'antd';
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
        msg:null,
    };
}



componentDidMount () { //在组件挂载完成后声明一个自定义事件
	emitter.addListener('callMe', (msg) => {
		this.setState({
			msg: msg
    });
   
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
    const createHotel=this.props.list.find(item => { return item.id === this.props.id; }).room;
    const source= new Array().push(JSON.stringify(createHotel));
        return(
             <div>{alert(JSON.stringify(source))}</div>
        );

        
      }
}

export default TableE;