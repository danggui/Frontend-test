import React from 'react';
import styles from './home.css';

import TableS from '../table/TableS';

const dataList = [
  { id: 1, name: 'a', email: 'a@email.com' },
  { id: 2, name: 'b', email: 'b@email.com' },
  { id: 3, name: 'c', email: 'c@email.com'}
];


class Home extends React.Component {

    constructor (props) {
        super(props);
    }

    handleClick = (e) => {
       
    }

    render(){
        return (
         <div >
             <div className={styles.title}>Properity List</div>
            <TableS/>
            <h1>Welcome to the Tornadoes Website!</h1>
            <button onClick={ this.handleClick }>Say Hello</button>

          </div>
        );
    }
}
export default Home;
