import React from 'react';
import {
    HashRouter,
    Route,
    Link,
    Switch
  } from 'react-router-dom';
import {Player,FullRoster} from '../player/Player';


class Roster extends React.Component {
    render(){
        return (
         <Switch>
            <Route exact path='/edit' component={FullRoster}/>
            <Route path='/edit/:number' component={Player}/>
          </Switch>
        );
    }
}
export default Roster;
