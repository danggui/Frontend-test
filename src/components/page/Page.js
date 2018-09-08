import React from 'react';
import Home from   '../home/Home';
import Edit from '../edit/Edit';
import {
    Route,
    Switch,
    Redirect,
    IndexRedirect
  } from 'react-router-dom';
import styles from './right.css';

import emitter from '../event/Ev';
import { Alert } from 'antd';
const goods= require('../../common/data/goods.json');
  
class Page extends React.Component{
  constructor(props){
    super(props);
    this.state={
     list:goods.datas,
    
   };
}
  componentDidMount() { //在组件挂载完成后声明一个自定义事件
    //添加room
  emitter.addListener('callMe', (room,price,id) => {
    this.setState(
      this.state.list.map((item) => {
          if(item.id==id){
            if(item.room){ 
             item.room=[...item.room,{ name: room, price:price,room_id:Math.random().toString(36).substr(2)}];
            }
            else{
              item.room=[...[],{ name: name, price:price,room_id:Math.random().toString(36).substr(2)}];
            }
          }
        })
    );
  });


  emitter.addListener('EditMe', (room,price,id,room_id) => {
      //更改room
      this.setState(
        this.state.list.map((item) => {
            if(item.id==id){
             item.room.map((item2)=>{
                 if(item2.room_id==room_id){
                  item2.name=room;
                  item2.price=price;
                 }
             });
             
            }
          })
      );
    });

    emitter.addListener('DeleteMe', (room,price,id,room_id) => {
      //删除room
      this.setState(
        this.state.list.map((item) => {
            if(item.id==id){
             item.room.map((item2,index)=>{
                 if(item2.room_id==room_id){
                  item.room.splice(index,1);
                 }
             });
             
            }
          })
      );
    });

     //添加Hotel
  emitter.addListener('AddHotel', (hotel) => {
    if(!hotel.name||hotel.name.length==0){
      alert('Do not forget to check all the inputs!');
       return;
    }
    this.setState(preState => ({
      list: [...preState.list,hotel]
    }));
      alert('You have build a new hotel!');
  });

}

    componentWillUnmount(){
    emitter.removeListener(this.eventEmitter);
}

    render(){
      return(   
      <div className={styles.right}>
      <Switch>
        <Route exact path='/'  render={(props) => (<Home {...props}  list={this.state.list}  />)}  />
        <Route path='/edit'    render={(props) => (<Edit {...props}  list={this.state.list}  />)}  />
     </Switch>
  </div>         
);


}

}



  export default Page;
  