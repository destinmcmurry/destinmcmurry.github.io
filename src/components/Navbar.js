import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = props => {
  return (
    <div className='Navbar'>
      <Link id='about' to='/about'><span>about</span></Link>
      <span className='seperator'>|</span>
      <Link id ='projects' to='/projects'><span> projects</span></Link>
      <span className='seperator'>|</span>
      <Link to='/timeline'><span>timeline</span></Link>
    </div>
  );
}

export default Navbar;
