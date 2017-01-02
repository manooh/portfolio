import React, { Component } from 'react';
import './InfoPages.scss';

const Developer = () => {
  return (
    <div>Developer</div>
  );
};

const Designer = () => {
  return (
    <div>Designer</div>
  );
};

const Teacher = () => {
  return (
    <div>Teacher</div>
  );
};

const More = () => {
  return (
    <div>More</div>
  );
};


export class InfoPage extends Component {

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

const InfoPages = { Developer, Designer, Teacher, More };
export default InfoPages;
