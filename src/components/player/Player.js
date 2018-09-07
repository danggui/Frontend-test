import React from 'react';
import {
  HashRouter,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import styles from './player.css';
import TableE from '../table/TableE';
import {Search,Room} from '../room/Room';

import emitter from '../event/Ev';
const goods= require('../../common/data/goods.json');
const hotel = require('../../common/data/hotel.json');
const room = require('../../common/data/room.json');
const ERR_OK = 0;


export class Content extends React.Component{
  constructor(props){
       super(props);
  }

  render(){
    if (!this.props.match.params.number) {
      return <div>Sorry, but the player was not found</div>;
     
    }
    const createHotel=this.props.list.find(item => { return item.id === this.props.match.params.number; });
    let source=[];
    if(createHotel.room){
      source =createHotel.room;
    }
    
    return (
      <div className={styles.content}>
      <div className={styles.title}>Price</div>
         <TableE key={source.id} list={source}  id={
           this.props.match.params.number
         } />
      </div>
    );
   
  }
}

  
export class Add extends React.Component{
  constructor(props){
    super(props);
    this.state={
     list:goods.datas
   };

}
saveHotel=(e)=>{
   alert(this.state.list);
}

  render(){
    return (
      <div className={styles.content}>
        <div className={styles.part}>
          <div className={styles.title}>Properity name</div>
          <Search option={this.state.list}/>
        </div>
       
         <div className={styles.button_list}>
          <div  className={styles.buttonS} onClick={this.saveHotel}>Save</div>
          <div  className={styles.buttonC} >Cancel</div>
         </div>
      </div>
    
    );
   
  }
}



export class Category extends React.Component{
  constructor(props){
    super(props);
   
  }

render(){
  return(
    <div className={styles.category} >
    <ul>
      {
       this.props.list.map(p => (
          <li key={p.id} className={styles.li_list}  >
            <Link to={`/edit/show/${p.id}`}>{p.name}</Link>
          </li>
        ))
      }
    </ul>
  </div>

  );
}
}



