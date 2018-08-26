import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = props => {
  return (
    <div className='Navbar'>
      <Link id='small-width' to='/blurb'><span>blurb</span></Link>
      <span className='seperator'>|</span>
      <Link to='/timeline'><span>timeline </span></Link>
      <span className='seperator'>|</span>
      <Link to='/projects'><span> projects </span></Link>
      <span className='seperator'>|</span>
      <Link id='media' to='/media'><span>media</span></Link>
    </div>
  );
}

export default Navbar;
