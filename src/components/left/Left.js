import React from 'react';
import styles from './left.css';
import {
    Link,
  } from 'react-router-dom';

  class Left extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        list:true,
        edit:false
      };
    }

    listhandleClick=()=>{
      this.setState(
        {
          list:true,
          edit:false
        }
      );
    }
    edithandleClick=()=>{
      this.setState(
        {
          list:false,
          edit:true
        }
      );
    }
    render(){
      return(
      <div className={styles.left}>
        <nav className={styles.nav}>
          <ul className={styles.ul}>
            <li className={[styles.li,this.state.list?styles.li_on:''].join(' ')} onClick={this.listhandleClick}><Link to='/'><svg  className={styles.icon} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><rect stroke="#000" strokeWidth="1.5" x=".75" y=".75" width="18.5" height="18.5" rx="1.429"/><rect fill="#000" x="5.714" y="5.714" width="8.571" height="1.429" rx=".714"/><rect fill="#000" x="5.714" y="9.286" width="8.571" height="1.429" rx=".714"/><rect fill="#000" x="5.714" y="12.857" width="8.571" height="1.429" rx=".714"/></g></svg>List</Link></li>
            <li className={[styles.li,this.state.list?'':styles.li_on].join(' ')} onClick={this.edithandleClick}><Link to='/edit/'><svg className={styles.icon}  viewBox="0 0 19 19" xmlns="http://www.w3.org/2000/svg"><path d="M7.857 11.226a.791.791 0 0 1-1.103 0 .794.794 0 0 1 0-1.102l9.773-9.9a.791.791 0 0 1 1.102 0 .794.794 0 0 1 .001 1.102l-9.773 9.9zm8.698 7.274H1.895A1.912 1.912 0 0 1 0 16.6V1.9C0 .862.86 0 1.895 0h9.823c.4 0 .749.374.749.8 0 .438-.361.8-.799.8H2.444a.858.858 0 0 0-.847.85V16.1c0 .462.387.85.847.85h13.612c.46 0 .847-.388.847-.85V6.25c0-.438.361-.8.799-.8.437 0 .798.362.798.8v10.364c-.058 1.038-.92 1.886-1.945 1.886z" fill="#000" fillRule="nonzero"/></svg>Edit</Link></li>
          </ul>
        </nav>
    </div>
      );
    }

  }

  export default Left;
  