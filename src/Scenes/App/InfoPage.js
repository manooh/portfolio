import React, { Component } from 'react';
import './InfoPage.scss';

export const Developer = () => {
  return (
    <div>Developer</div>
  );
};

export const Designer = () => {
  return (
    <div>Designer</div>
  );
};

export const Teacher = () => {
  return (
    <div>Teacher</div>
  );
};

export const More = () => {
  return (
    <div>More</div>
  );
};


class InfoPage extends Component {

  render() {
    return(
      <div className='info-page'>
        <div className='info-page-content'>
          {this.props.children}
        </div>
      </div>
    )
  }
};

export default InfoPage;
