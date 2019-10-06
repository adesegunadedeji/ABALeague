import React from 'react';
import './App.css';
import FooterComponent from './Components/Footer/Footer'

import PlayerRoster from './Components/PlayersRoster/PlayerRoster';

function App() {
  return (
    <div className="App">
      <h1>ABA Basketball League</h1>
      <PlayerRoster/>
      <FooterComponent/>
    </div>
  );
}

export default App;
