import React from 'react';

export const Footer = () => {
  return (
    <footer className='footer'>
      <h1 className='footer__title white uppercase'>Learn More</h1>
      <div className='content'>
        <div className='divider' />
          <p className='m-0'>Sign up to hear about the latest updates via email</p>
          <div className='row'>
            <div className='col-5'>
              <input className='input-small' type='text' placeholder='Name' />
            </div>
            <div className='col-5'>
              <input className='input-small' type='text' placeholder='Email' />
            </div>
            <div className='col-2'>
              <button className='btn btn-small'>Sign Up</button>
            </div>
          </div>
        </div>
      {/* <p className='subtitle'>Company © 2018.</p> */}
    </footer>
  );
};
