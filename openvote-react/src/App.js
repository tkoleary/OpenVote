import React, { Component } from 'react';
import MyTooltip from './tooltip.js';
import Ballot from './ballot.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to OpenVote</h2>
        </div>
        <Ballot contests={CONTESTS}/>
      </div>
    );
  }
}

export default App;
