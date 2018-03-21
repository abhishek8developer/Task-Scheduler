
import React from 'react';

const Header = () =>
  <div className='row'>
    <div className='col-md-12'>
      <div className='menu-container'>
        <a className='menu home' href='#/'> Home</a>
        <a className='menu login' href='#/login'> Login </a>
      </div>
    </div>
  </div>;

Header.propTypes = {};

export default Header;
