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
             name:'',
             currency:'',
           
            
             
         };
    }
  
    handleChange=(value)=>{
       this.setState({name:value});
      
    }

   render(){
    return (
        <div>
        <Select  placeholder={this.state.placeholder} style={{ width: '100%' }} onChange={this.handleChange} >
          {this.options}
        </Select>
        <Room  name={this.state.name} />
      </div>
      );
   }
    
 }

 export class Room extends React.Component{
    constructor(props){
         super(props);
         this.state={
            name:'',
            price:'',
            room:[],
            hotel:{}
                  
         };
    }
    addName= (e)=>{
       
        this.setState({name: e.target.value});
        
    }
    addPrice= (e)=>{
       
        this.setState({price: e.target.value});
    }
    
   
    createRoom =()=>{
        if(!this.state.name||this.state.name.length==0){
            alert('You need to input room name!');
             return;
          }
      this.setState(preState => ({
        room: [...preState.room, {name:this.state.name,price:this.state.price}]
      }));

      this.setState(preState => ({
        hotel:{name:this.props.name,id:Math.random().toString(36).substr(2),room: preState.room}
      }));
      

      
      this.setState({name: ''});
      this.setState({price: ''});
    }

    cancel= (e)=>{
        this.setState({name: ''});
        this.setState({price: ''});
        this.setState({room: []});
    
    }
  
   render(){
    const saveHotel=() =>{
        return () => {
            // 触发自定义事件
            emitter.emit('AddHotel', this.state.hotel);

        };
    };

    return (
        <frameElement>
        <div className={styles.outer}>
            <div className={styles.input_list}>
                <Input size='large'  value={this.state.name} placeholder='Room name' style={{ width: '70%' }}  onChange={this.addName}/> 
                
                <Input size='large' value={this.state.price}  placeholder='Price' style={{ width: '25%' }} onChange={this.addPrice}/>
            </div>
         <div  className={styles.button} onClick= {this.createRoom}>Add</div>
        </div>

        <div className={styles.button_list}>
        <div  className={styles.buttonS} onClick={saveHotel()}>Save</div>
        <div  className={styles.buttonC} onClick={this.cancel}>Cancel</div>
        </div>
        </frameElement>
      );
   }
    
 }

 export class Room2 extends React.Component{
    constructor(props){
         super(props);
         this.state={
            room_name:'',
            price:'',
            list:[]  
         };
 
    }
    addName= (e)=>{
        this.setState({room_name: e.target.value});
        
    }
    addPrice= (e)=>{
        this.setState({price: e.target.value});
    }
   
 
   render(){
    const publ=() =>{
        return () => {
            // 触发自定义事件
            emitter.emit('callMe', this.state.room_name,this.state.price,this.props.id);
            this.setState({room_name: ''});
            this.setState({price: ''});

        };
    };

    return (
        <div className={styles.outer}>
            <div className={styles.input_list}>
                <Input size='large'  value={this.state.room_name} placeholder='Room name' style={{ width: '70%' }}  onChange={this.addName}/> 
                
                <Input size='large' value={this.state.price}  placeholder='Price' style={{ width: '25%' }} onChange={this.addPrice}/>
            </div>
         <div  className={styles.button} onClick= {publ()}>Add</div>
        </div>
      );
   }
    
 }
  