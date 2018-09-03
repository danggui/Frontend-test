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
   import React, { Component } from 'react';
   import ReactDOM from 'react-dom';
   // import { Router, Route, Link, Switch } from 'react-router';
   import {HashRouter} from 'react-router-dom';
   import Header from './components/header/Header';
   import Left from './components/left/Left';
   import Page from   './components/page/Page';
   import './css/reset';
   import styles from  './css/app';
   
 
const App = () => (
  <div className={styles.max_height }>
    <Header />
    <div className={styles.main }>
    <Left />
    <Page />
    </div>
  </div>
);

ReactDOM.render((
  <HashRouter>
    <App />
  </HashRouter>
), document.getElementById('app'));


