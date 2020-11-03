import React from 'react';
import { Link } from 'react-router-dom';
import rootsLogo from '../../assets/roots-title-logo.jpg';
import './Nav.css';

const Nav = ({ user }) => {
  return (
    <nav>
      <Link to="/">
        <img src={rootsLogo} alt="logo with word roots" className="rootslogo" />
      </Link>
      <h2 className="nav-username">{user.name}</h2>
    </nav>
  );
};

export default Nav;
