import React from 'react';
import {Modal,Table,Input} from 'antd';
import {Room,Room2} from '../room/Room';
import styles from './table.css';
import emitter from '../event/Ev';







class TableE extends React.Component{

  columns = [ {
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
        <a href="javascript:;" onClick={this.showModal}>
        Edit
        </a>
      </span>
    ),
  }];


  constructor(props){
    super(props);
    this.state={
      room_name:'',
      price:'',
      visible: false
    };
   
}
showModal = () => {
  this.setState({
    visible: true,
    room:this.props.list.name,
    price:this.props.list.price,

  });
}


handleOk = (e) => {
  this.setState({
    visible: false,
  });
}

handleCancel = (e) => {
  this.setState({
    visible: false,
  });
}

addName=()=>{

}

addPrice=()=>{
  
}

 render(){
   
        return(
          <div>
          <Table dataSource={this.props.list} columns={this.columns} />
          <Room2 id={this.props.id}/>
          <Modal  
          title="Edit Room"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
         
         <div className='modal_title'>room name </div>
         <Input  defaultValue={this.props.list.room}   onChange={this.addName}/> 
         <div className='modal_title'>Price</div>
         <Input  defaultValue={this.props.list.price} onChange={this.addPrice}/> 

        </Modal>
          </div>
        );

      }
      
}

export default TableE;