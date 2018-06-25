import React from 'react';
import Logo from './images/logo.png';
import './style.scss';

class Header extends React.Component {
  render() {
    return (
      <header className='header'>
        <a href='#' className='logo'>
          <img src={Logo} className='img-logo' />
        </a>
        <h1 className='title'>Pokemon Go</h1>
      </header>
    );
  }
}

export default Header;
