/*
import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/TodoList'; 



    class App extends React.Component {
        render(){ // Every react component has a render method.
          return( // Every render method returns jsx. Jsx looks like HTML, but it's actually javascript and functions a lot like xml, with self closing tags requiring the `/` within the tag in order to work propperly
          <TodoList />
          );
        }
      }
      
      ReactDOM.render(<App />, document.getElementById('app'));

    */
   import Home from './components/Home';
   import Roster from './components/Roster';
   import React, { Component } from 'react';
   import ReactDOM from 'react-dom';
   // import { Router, Route, Link, Switch } from 'react-router';
   import {
     HashRouter,
     Route,
     Link,
     Switch
   } from 'react-router-dom';
    
 


// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string '/'
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/roster' component={Roster}/>
    </Switch>
  </main>
);

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/roster'>Roster</Link></li>
      </ul>
    </nav>
  </header>
);

const App = () => (
  <div>
    <Header />
    <Main />
  </div>
);

// This demo uses a HashRouter instead of BrowserRouter
// because there is no server to match URLs
ReactDOM.render((
  <HashRouter>
    <App />
  </HashRouter>
), document.getElementById('app'));
