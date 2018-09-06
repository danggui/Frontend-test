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
  
const Page = () => (
    <div className={styles.right}>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/edit'     component={Edit} >
        
       </Route>
      </Switch>
    </div>
  );

  export default Page;
  