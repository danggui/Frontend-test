import React from 'react';
import { Select } from 'antd';
import { Input } from 'antd';
import emitter from '../event/Ev';
import styles from './room.css';
const name= require('../../common/data/name.json');
const Option = Select.Option;

const options =  name.datas.map( (item,index) => (
            <Option key={index}>{item.name}</Option>
          ));



export class Search extends React.Component{
    constructor(props){
         super(props);
         this.state={
             placeholder:'Select a properity',
            
         };
    }

    handleChange=(value)=>{
        console.log(value);
    }

   render(){
    return (
        <div>
        <Select  placeholder={this.state.placeholder} style={{ width: '100%' }} onChange={this.handleChange}>
          {options}
        </Select>
      </div>
      );
   }
    
 }

 export class Room extends React.Component{
    constructor(props){
         super(props);
         this.state={
            room_name:'',
            price:''
         };
    }
    addRoom= ()=>{
        alert(2424);
    }
  
   render(){
    const cb = (msg) => {
        return () => {
            // 触发自定义事件
            emitter.emit('callMe','Hello');
        };
    };

    return (
        <div className={styles.outer}>
            <div className={styles.input_list}>
                <Input size='large' placeholder='Room name' style={{ width: '70%' }}/> 
                <Input size='large' placeholder='Price' style={{ width: '25%' }}/>
            </div>
         <div  className={styles.button} onClick={cb('blue')}>Add</div>
        </div>
      );
   }
    
 }
  