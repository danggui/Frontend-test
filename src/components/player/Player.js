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
const goods = require('../../common/data/goods.json');
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
    return (
      <div className={styles.content}>
      <div className={styles.title}>Price</div>
         <TableE id={this.props.match.params.number}/>
        
         <Room/>
      </div>
    );
   
  }
}

  
export class Add extends React.Component{
  constructor(props){
    super(props);
}
  render(){
    return (
      <div className={styles.content}>
        <div className={styles.part}>
          <div className={styles.title}>Properity name</div>
          <Search/>
        </div>
        <div className={styles.part}>
          <div className={styles.title}>Price</div>
          <Room/>
         </div>
      </div>
    
    );
   
  }
}



export class Category extends React.Component{
  constructor(props){
    super(props);
    this.state={list:hotel.datas};
}

render(){
  return(
    <div className={styles.category}>
    <ul>
      {
       this.state.list.map(p => (
          <li key={p.number} className={styles.li_list}>
            <Link to={`/edit/show/${p.hotel_id}`}>{p.hotel_name}</Link>
          </li>
        ))
      }
    </ul>
  </div>

  );
}
}



