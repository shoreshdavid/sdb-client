import React from 'react';
import { Link } from 'react-router';

const Footer = () => {
  return (
    <div className='footer'>
      <Link to='/'>Home</Link>
      <Link to='/posts'>Blog</Link>
      <Link to='/contact'>Contact</Link>
      <div className='legal'>
        <Link to='/terms'>Terms</Link>
        <Link to='/privacy'>Privacy</Link>
      </div>
    </div>
  );
}

export default Footer;