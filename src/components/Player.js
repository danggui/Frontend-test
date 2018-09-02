import React from 'react';
import {
  HashRouter,
  Route,
  Link,
  Switch
} from 'react-router-dom';

 const PlayerAPI = {
  players: [
    { number: 1, name: 'Ben Blocker', position: 'G' },
    { number: 2, name: 'Dave Defender', position: 'D' },
    { number: 3, name: 'Sam Sweeper', position: 'D' },
    { number: 4, name: 'Matt Midfielder', position: 'M' },
    { number: 5, name: 'William Winger', position: 'M' },
    { number: 6, name: 'Fillipe Forward', position: 'F' }
  ],
  rooms:[
    {
      'id': 'eyJ0eXBlIjoiUHJvcGVydHkiLCJpZCI6NzI1fQ==',
      'name': 'urbanest North Terrace',
      'currency': 'GBP'
    },
    {
      'id': 'eyJ0eXBlIjoiUHJvcGVydHkiLCJpZCI6NTg5fQ==',
      'name': 'urbanest Cleveland Street',
      'currency': 'GBP'
    },
    {
      'id': 'eyJ0eXBlIjoiUHJvcGVydHkiLCJpZCI6NTk0fQ==',
      'name': 'urbanest Quay Street',
      'currency': 'GBP'
    },
    {
      'id': 'eyJ0eXBlIjoiUHJvcGVydHkiLCJpZCI6MTA4Nn0==',
      'name': 'urbanest Glebe',
      'currency': 'GBP'
    },
    {
      'id': 'eyJ0eXBlIjoiUHJvcGVydHkiLCJpZCI6NTkwfQ==',
      'name': 'urbanest Darlington',
      'currency': 'GBP'
    },
    {
      'id': 'eyJ0eXBlIjoiUHJvcGVydHkiLCJpZCI6NTg4fQ==',
      'name': 'urbanest Carlton',
      'currency': 'GBP'
    },
    {
      'id': 'eyJ0eXBlIjoiUHJvcGVydHkiLCJpZCI6NTk1fQ==',
      'name': 'urbanest South Bank',
      'currency': 'GBP'
    },
    {
      'id': 'eyJ0eXBlIjoiUHJvcGVydHkiLCJpZCI6NTk3fQ==',
      'name': 'urbanest Sydney Central',
      'currency': 'GBP'
    },
    {
      'id': 'eyJ0eXBlIjoiUHJvcGVskk3iuf2aZCI6NzI1fQ==',
      'name': 'E 10th & 1st Ave',
      'currency': 'USD'
    },
    {
      'id': 'eyJ0eXBlIjoiUHJvcppqolKKJNKpZCI6NzI1fQ==',
      'name': 'Elizabeth & Spring',
      'currency': 'AUD'
    },
    {
      'id': 'eyJ0eXBlIjoioo1j28dkJSO88uIJHNKwNzI1fQ==',
      'name': 'Ludlow & Hester',
      'currency': 'AUD'
    },
    {
      'id': 'eyJ0eXBlIjoiUHJvcde3JJLqKIPpZCI6NzI1fQ==',
      'name': 'Scape Abercrombie',
      'currency': 'AUD'
    },
    {
      'id': 'eyJ0eXBlIjoiUHJvcGVydHkiL00oJJIONzI1fQ==',
      'name': 'Iglu Chatswood',
      'currency': 'AUD'
    },
    {
      'id': 'eyJ0eXBlIjoiUHJvcGVydKOOEg22ZCI6NzI1fQ==',
      'name': 'Western Sydney University Village - Hawkesbury',
      'currency': 'AUD'
    },
    {
      'id': 'eyJ0eXBlIjoiUHksk3ls1ssiLCJpZCI6NzI1fQ==',
      'name': 'Western Sydney University Village - Bankstown',
      'currency': 'AUD'
    },
    {
      'id': 'eyJ0eXBlIjoiUHJvc00o19kiLCJpZCI6NzI1fQ==',
      'name': 'Western Sydney University Village - Bankstown',
      'currency': 'AUD'
    },
    {
      'id': 'eyJ0eXBlIjoiUHJvcGVydHkiLCJpmmaYUoI1fQ==',
      'name': 'Sydney City',
      'currency': 'AUD'
    },
    {
      'id': 'eyJ0eXBlIjoiUHJvcGV0IIjqjndfZCI6NzI1fQ==',
      'name': 'Jack’s Place',
      'currency': 'AUD'
    },
    {
      'id': 'eyJ0eXBlIjoiUHJvcG551HkiLCJpZCI6NzI1fQ==',
      'name': 'Forest Lodge',
      'currency': 'AUD'
    },
    {
      'id': 'eyJ0eXBlIjoiUHJvcGVydHk9o2JpZCI6NzI1fQ==',
      'name': 'Empire Hotel',
      'currency': 'AUD'
    }
  ],
  all: function() { return this.players;},
  get: function(id) {
    const isPlayer = p => p.number === id;
    return this.players.find(isPlayer);
  }
};

export const Player = (props) => {
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
      <Link to='/roster'>Back</Link>
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
            <Link to={`/roster/${p.number}`}>{p.name}</Link>
          </li>
        ))
      }
    </ul>
  </div>
);