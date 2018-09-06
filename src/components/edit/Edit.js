import React from 'react';
import {
    HashRouter,
    Route,
    Link,
    Switch
  } from 'react-router-dom';
import {Content,Category,Add} from '../player/Player';
import styles from './edit.css';

const goods= require('../../common/data/goods.json');


class Roster extends React.Component {
    constructor(props){
        super(props);
        this.state={
         list:goods.datas,
        
       };
   }

    render(){
        return (
        
         <div className={styles.total} >
             <div className={styles.title_list}><div className={styles.title}>Edit Properity</div><Link to='/edit/add'><div className={styles.button}> Add new propertity</div></Link></div>
              <div className={styles.content}>
              <Category list={this.state.list}/>
              <Switch>
              <Route  path='/edit/show/:number'  component={Content}/>
              <Route  path='/edit/add' component={Add} />
              </Switch>
              </div>
          </div>
        );
    }
}
export default Roster;
