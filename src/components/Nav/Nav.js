import React from 'react';
import { Link } from 'react-router-dom';
import rootsLogo from '../../assets/roots-title-logo.jpg';
import './Nav.css';

const Nav = () => {
  return (
    <nav>
      <Link to='/'>
        <img src={rootsLogo} alt='logo with word roots' />
      </Link>
      <h2>User Name</h2>
    </nav>
  );
};

export default Nav;
