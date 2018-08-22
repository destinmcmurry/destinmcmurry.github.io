import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = props => {
  return (
    <div className='Navbar'>
      <Link id='small-width' to='/blurb'><span>blurb.</span></Link>
      <Link to='/timeline'><span>timeline. </span></Link>
      <Link to='/projects'><span> projects.</span></Link>
      <Link to='/misc'><span>misc.</span></Link>
    </div>
  );
}

export default Navbar;
