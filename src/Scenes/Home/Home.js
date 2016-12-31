import React, { Component } from 'react';
import './Home.scss';

import Cube from '../../Components/Cube/Cube';
import Menu from '../../Components/Menu/Menu';


class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Menu />
        <Cube />
      </div>
    );
  }
}

export default Home;
