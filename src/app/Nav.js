import React from 'react';
import { Link } from 'react-router';

const donateLink = 'http://www.mcssl.com/SecureCart/SecureCart.aspx?mid=2C37E45F-149B-4853-9879-DC5AA7B39A34&pid=0938126f8abc48f5b748f0113768436a';

export const Nav = () => {
  return (
    <div className='nav'>
      {/*<div className='hamburger'>
        <a href='#'>
          <i className='fa fa-bars'></i>
        </a>
      </div>*/}
      <Link to='/'>Home</Link>
      <Link to='/announcements'>Announcements</Link>
      <Link to='/live'><span className='live'>Live Stream</span></Link>
      <Link to='/services'>Services</Link>
      <Link to='/products'>Store</Link>
      <Link to='/posts'>Articles</Link>
      <Link to={donateLink} target='_blank'>Donate</Link>
      <Link to='/contact'>Contact</Link>
    </div>
  );
}