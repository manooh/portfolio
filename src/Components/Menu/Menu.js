import React, { Component } from 'react';
import './Menu.scss';

class Menu extends Component {
  render() {
    return (
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item"><a href="#"><span className="icon-home"></span><span>Home</span></a></li>
          <li className="nav-item"><a href="#"><span className="icon-developer"></span><span>Programmer</span></a></li>
          <li className="nav-item"><a href="#"><span className="icon-designer"></span><span>UX&nbsp;Designer</span></a></li>
          <li className="nav-item"><a href="#"><span className="icon-teacher"></span><span>Teacher</span></a></li>
          <li className="nav-item"><a href="#"><span className="icon-more"></span><span>And&nbsp;more!</span></a></li>
          <li className="nav-item"><a href="#"><span className="icon-mail"></span><span>Contact</span></a></li>
        </ul>
      </nav>
    );
  }
}

export default Menu;
