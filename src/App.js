import React, { Component } from 'react';
import './App.css';
import Test1 from './test1'
import FriendsContainer from './FriendsContainer'
import Friends1 from './friends1'

class App extends Component {
  render() {
    return (
      <div className="App">
          <header>

          </header>
            Learn React
        <div> <Test1/></div>
        <div > <FriendsContainer></FriendsContainer></div>
        <Friends1></Friends1>
      </div>
    );
  }
}

export default App;
