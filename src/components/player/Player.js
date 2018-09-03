import React from 'react';
import {
  HashRouter,
  Route,
  Link,
  Switch
} from 'react-router-dom';

const goods = require('../../common/data/goods.json');
const ERR_OK = 0;


 const PlayerAPI = {
  players: [
    { number: 1, name: 'Ben Blocker', position: 'G' },
    { number: 2, name: 'Dave Defender', position: 'D' },
    { number: 3, name: 'Sam Sweeper', position: 'D' },
    { number: 4, name: 'Matt Midfielder', position: 'M' },
    { number: 5, name: 'William Winger', position: 'M' },
    { number: 6, name: 'Fillipe Forward', position: 'F' }
  ],
  
  all: function() { return this.players;},
  get: function(id) {
    const isPlayer = p => p.number === id;
    return this.players.find(isPlayer);
  }
};


export const Player = (props) => {

  const fetchSelData = () => {
    fetch(goods)
        .then((res)=>{
          if(goods.errno===ERR_OK){
              const data=goods.datas;
              alert(data);
          }
      }) .catch();
     
  } ;

  const player = PlayerAPI.get(
    parseInt(props.match.params.number, 10)
  );
  if (!player) {
    return <div>Sorry, but the player was not found</div>;
   
  }
 
  return (
    <div>
      <h1>{player.name} (#{player.number})</h1>
      <h2>Position: {player.position}</h2>
      <Link to='/edit'>Back</Link>
      <button onClick={fetchSelData}></button>
    </div>
  );
 
};

// The FullRoster iterates over all of the players and creates
// a link to their profile page.
export const FullRoster = () => (
  <div>
    <ul>
      {
        PlayerAPI.all().map(p => (
          <li key={p.number}>
            <Link to={`/edit/${p.number}`}>{p.name}</Link>
          </li>
        ))
      }
    </ul>
  </div>
);