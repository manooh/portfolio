import React, { Component } from 'react';
import './NameBackground.scss';

export default class NameBackground extends Component {

  render() {
    return(
      <div className='name-background' aria-hidden='true'>
        <div className='fades'>
          <div className='fade f1'>Manuela&nbsp;Hutter</div>
          <div className='fade f2'>Manuela&nbsp;Hutter</div>
          <div className='fade f3'>Manuela&nbsp;Hutter</div>
          <div className='fade f4'>Manuela&nbsp;Hutter</div>
          <div className='fade f5'>Manuela&nbsp;Hutter</div>
          <div className='fade f6'>Manuela&nbsp;Hutter</div>
        </div>
      </div>
    )
  }
};
