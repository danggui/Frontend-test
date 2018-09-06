import React from 'react';
import { Select } from 'antd';
import { Input } from 'antd';
import emitter from '../event/Ev';
import styles from './room.css';
import propTypes from 'prop-types';
const Option = Select.Option;




export class Search extends React.Component{
    static propTypes={
        price: propTypes.number
     };
    options =  this.props.option.map( (item,index) => (
        <Option key={index} value={item.name} >{item.name}</Option>
      ));

    constructor(props){
         super(props);
         this.state={
             placeholder:'Select a properity',
             hotel_name:'',
             list:[]
             
         };
    }
  
    handleChange=(value)=>{
       this.setState({hotel_name:value});
    }

   render(){
    return (
        <div>
        <Select  placeholder={this.state.placeholder} style={{ width: '100%' }} onChange={this.handleChange} >
          {this.options}
        </Select>
        <Room list={this.state.list} hotel={this.state.hotel_name}/>
      </div>
      );
   }
    
 }

 export class Room extends React.Component{
    constructor(props){
         super(props);
         this.state={
            room_name:'',
            price:'',
            
         };
 
    }
    addName= (e)=>{
        this.setState({room_name: e.target.value});
        
    }
    addPrice= (e)=>{
        this.setState({price: e.target.value});
    }
   
    createRoom =()=>{
      this.props.list.push({hotel_name:this.props.hotel,room_name:this.state.room_name,price:this.state.price});
    }
  
   render(){
    function publ(){
		return function () {
			emitter.emit('callMe', '我是发布者');
		};
	}

    return (
        <div className={styles.outer}>
            <div className={styles.input_list}>
                <Input size='large'  value={this.state.room_name} placeholder='Room name' style={{ width: '70%' }}  onChange={this.addName}/> 
                
                <Input size='large' value={this.state.price}  placeholder='Price' style={{ width: '25%' }} onChange={this.addPrice}/>
            </div>
         <div  className={styles.button} onClick= {this.createRoom}>Add</div>
        </div>
      );
   }
    
 }
  