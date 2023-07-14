import React from 'react';
import '../css/NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
  return (
    <div className='nav-bar'>
      <span>Final Project</span>
      <Link to='/order'><a>Cart({props.Cart.length})</a></Link>
    </div>
  )
}

export default NavBar;