import React from 'react';
import {
    HashRouter,
    Route,
    Link,
    Switch
  } from 'react-router-dom';
  import {Player,FullRoster} from './Player';


class Roster extends React.Component {
    render(){
        return (
            <Switch>
            <Route exact path='/roster' component={FullRoster}/>
            <Route path='/roster/:number' component={Player}/>
          </Switch>
        );
    }
}
export default Roster;
