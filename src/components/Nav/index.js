import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './main.css';

const donateLink = 'http://www.mcssl.com/SecureCart/SecureCart.aspx?mid=2C37E45F-149B-4853-9879-DC5AA7B39A34&pid=0938126f8abc48f5b748f0113768436a';

const imageSrc = 'https://avatars1.githubusercontent.com/u/31414402?s=460&v=4';

export const Nav = () => {
  return (
    <div className='navbar'>
      <div className='hamburger'>
        <i className='fa fa-bars'></i>
      </div>
      <Link to='/'>
        <img src={imageSrc} alt='boltstack-logo' className='logo' />
      </Link>
      <div className='links'>
        <NavLink exact to='/' activeClassName='active'>Home</NavLink>
        <NavLink exact to='/announcements'>Announcements</NavLink>
        <NavLink exact to='/live'>Live</NavLink>
        <NavLink exact to='/services'>Services</NavLink>
        <NavLink exact to='/products'>Store</NavLink>
        <NavLink exact to='/articles'>Articles</NavLink>
        <NavLink exact to={donateLink}>Donate</NavLink>
        <NavLink exact to='/contact'>Contact</NavLink>
      </div>
    </div> 
  );
}