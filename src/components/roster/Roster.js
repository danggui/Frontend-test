import React from 'react';
import {
    HashRouter,
    Route,
    Link,
    Switch
  } from 'react-router-dom';
import {Player,FullRoster} from '../player/Player';
import { Divider } from 'antd';


class Roster extends React.Component {
    render(){
        return (
         <div>
            <Route exact path='/edit' component={FullRoster}/>
            <Route path='/edit/:number' component={Player}/>
          </div>
        );
    }
}
export default Roster;
