import React from 'react';
import {
    Route,
    Link,
    Switch
  } from 'react-router-dom';
import {Content,Category,Add} from '../player/Player';
import styles from './edit.css';



class Edit extends React.Component {
    constructor(props){
        super(props);
      
   }

    render(){
        return ( 
         <div className={styles.total} >
             <div className={styles.title_list}><div className={styles.title}>Edit Properity</div><Link to='/edit/add'><div className={styles.button}> Add new propertity</div></Link></div>
              <div className={styles.content}>
              <Category list={this.props.list}/>
              <Switch>
              <Route  path='/edit/show/:number'    render={(props) => (<Content  {...props}   list={this.props.list}  />)}  />
              <Route  path='/edit/add' component={Add} />
              </Switch>
              </div>
          </div>
        );
    }
}
export default Edit;
