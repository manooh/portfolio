import React, { Component } from 'react';
import './App.scss';

import Cube from '../../Components/Cube/Cube';
import Menu from '../../Components/Menu/Menu';


class App extends Component {
  render() {
    return (
      <div className="app">
        <Menu />
        <Cube />
      </div>
    );
  }
}

export default App;
