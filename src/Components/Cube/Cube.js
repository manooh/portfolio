import React, { Component } from 'react';
import './Cube.scss';

class Cube extends Component {
  render() {
    return (
      <div className="centered">
        <div className="container">
          <div className="descriptions">
            <div className="desc d1"><a href="#Designer">UX Designer</a></div>
            <div className="desc d2"><a href="#Teacher">Teacher</a></div>
            <div className="desc d3"><a href="#Developer">Programmer</a></div>
          </div>

          <div className="cube">
            <div className="circle">
              <div className="sides">
                <div className="side1"></div>
                <div className="side2"></div>
                <div className="side3"></div>
                <div className="side4"></div>
                <div className="side5"></div>
                <div className="side6"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cube;
