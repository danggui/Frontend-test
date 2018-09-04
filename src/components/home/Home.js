import React from 'react';
import styles from './home.css';

import TableS from '../table/TableS';

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
          </div>
        );
    }
}
export default Home;
