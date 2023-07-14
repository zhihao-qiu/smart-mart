import React from 'react';
import '../css/NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
  return (
    <div className='nav-bar'>
      <Link to='/'><span>Final Project</span></Link>
      <Link to='/order'><a>Cart({props.Cart.length})</a></Link>
    </div>
  )
}

export default NavBar;