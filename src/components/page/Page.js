import React from 'react';
import Home from   '../home/Home';
import Roster from '../roster/Roster';
import {
    Route,
    Switch
  } from 'react-router-dom';
import styles from './right.css';
  
const Page = () => (
    <div className={styles.right}>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/edit' component={Roster}/>
      </Switch>
    </div>
  );

  export default Page;
  