import React, { Component, PropTypes } from 'react';

import './Menu.scss';

class Menu extends Component {
  setPage(page) {
    this.props.setPage(page);
  }

  render() {
    return (
      <nav className="nav">
        <ul className="nav-list">
          <li href='#' className={'nav-item ' + ('Home' === this.props.currentPage ? 'selected' : '')}>
            <a onClick={this.setPage.bind(this, 'Home')}>
              <span className="icon-home"></span>
              <span>Home</span>
            </a>
          </li>

          {Object.keys(this.props.infoPages).map((infoPage) => {
            let iconName = 'icon-'+infoPage.toLowerCase();
            return (
              <li className={'nav-item ' + (infoPage === this.props.currentPage ? 'selected' : '')} key={infoPage} >
                <a href={'#' + infoPage} onClick={this.setPage.bind(this, infoPage)}>
                  <span className={iconName}></span>
                  <span>{infoPage}</span>
                </a>
              </li>
            );
          })}

          <li className={'nav-item ' + ('Mail' === this.props.currentPage ? 'selected' : '')}>
            <a href='#mail' onClick={this.setPage.bind(this, 'Mail')}>
              <span className="icon-mail"></span>
              <span>Contact</span>
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}
Menu.propTypes = {
  infoPages:   PropTypes.object.isRequired,
  currentPage: PropTypes.string.isRequired,
  setPage:     PropTypes.func.isRequired
};

export default Menu;
