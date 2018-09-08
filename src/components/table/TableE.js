import React from 'react';
import {Modal,Table,Divider,Input} from 'antd';
import {Room2} from '../room/Room';

import emitter from '../event/Ev';







class TableE extends React.Component{
  constructor(props){
    super(props);
    this.state={
      room:'',
      room_id:'',
      price:'',
      visible: false,
      editingKey: ''
    };
    this.columns = [ {
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
          <a href="javascript:;" onClick={()=>this.showModal(record)}>
          Edit
          </a>
          <Divider type="vertical" />
          <a href="javascript:;" onClick={()=>this.delete(record)}>
          Delete
          </a>
        </span>
      ),
    }];
   
}

delete=(record)=>{
  emitter.emit('DeleteMe', record.name,record.price,this.props.id,record.room_id);
}
showModal = (record) => {
  this.setState({
    visible: true,
    room:record.name,
    price:record.price,
    room_id:record.room_id
    //editingKey: key 
  });
}

handleOk = (e) => {
    // 触发自定义事件
    emitter.emit('EditMe', this.state.room,this.state.price,this.props.id,this.state.room_id);
    this.setState({
      visible: false,
    });

}
handleCancel = (e) => {
  this.setState({
    visible: false,
  });
}

addName= (e)=>{
  this.setState({room: e.target.value});
  
}
addPrice= (e)=>{
  this.setState({price: e.target.value});
}


 render(){
        return(
          <div>
          <Table dataSource={this.props.list} columns={this.columns} />
          <Room2 id={this.props.id}/>
          <Mod visible={this.state.visible}  id={this.state.room_id} room={this.state.room} price={this.state.price} addName={this.addName} addPrice={this.addPrice} handleOk={this.handleOk} handleCancel={this.handleCancel}/>
          </div>
        );

      }
      
}


class Mod extends React.Component{

  constructor(props){
    super(props);
    this.state={
      room:'',
      price:'',
      editingKey: ''
    };  
}


render(){
   
  return(
    <Modal 
    centered
    list={this.props.list}
    title="Edit Room"
    visible={this.props.visible}
    onOk={this.props.handleOk}
    onCancel={this.props.handleCancel}
   
  >
   
   <div className='modal_title'>room name </div>
   <Input value={this.props.room}   onChange={this.props.addName}/> 
   <div className='modal_title'>Price</div>
   <Input value={this.props.price}  onChange={this.props.addPrice}/> 

  </Modal>
  
  );

}

}




export default TableE;