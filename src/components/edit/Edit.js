import React from 'react';
import {
    HashRouter,
    Route,
    Link,
    Switch
  } from 'react-router-dom';
import {Content,Category,Add} from '../player/Player';
import styles from './edit.css';
import emitter from '../event/Ev';
const goods= require('../../common/data/goods.json');


class Roster extends React.Component {
    constructor(props){
        super(props);
        this.state={
         list:goods.datas,
         obj:{}
        
       };
   }

   componentDidMount() { //在组件挂载完成后声明一个自定义事件
    emitter.addListener('callMe', (room,price,id) => {
      this.setState(preState => ({
        obj: Object.assign({}, preState.obj, { name: room, price:price,id:id})
      }));

      
      this.setState(
        this.state.list.map((item) => {
            if(item.id==id){
              if(item.room){ 
               item.room=[...item.room,{ name: room, price:price}];
              }
              else{
                item.room=[...[],{ name: name, price:price}];
              }
              
            }
          })
      );
    });
  }
   
  componentWillUnmount(){
    emitter.removeListener(this.eventEmitter);
}
   
 

    render(){
        return ( 
         <div className={styles.total} >
             <div className={styles.title_list}><div className={styles.title}>Edit Properity</div><Link to='/edit/add'><div className={styles.button}> Add new propertity</div></Link></div>
              <div className={styles.content}>
              <Category list={this.state.list}/>
              <Switch>
              <Route  path='/edit/show/:number'    render={(props) => (<Content  {...props} 
               list={this.state.list}
               />)}  />
              <Route  path='/edit/add' component={Add} />
              </Switch>
              </div>
          </div>
        );
    }
}
export default Roster;
