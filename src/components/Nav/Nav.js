import React from 'react';
import { Link } from 'react-router-dom';
import rootsLogo from '../../assets/roots-title-logo.jpg';
import './Nav.css';

const Nav = () => {
  return (
    <nav>
      <Link to='/'>
        <img src={rootsLogo} alt='logo with word roots' className='rootslogo' />
      </Link>
      {/* I will need to get the user name from the global state*/}
      <h2 className='nav-username'>Horacio The Badass</h2>
    </nav>
  );
};

export default Nav;
