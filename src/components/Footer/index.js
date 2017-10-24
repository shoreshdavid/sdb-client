import React from 'react';
import { Link } from 'react-router-dom';
import './main.css';

export const Footer = () => {
  return (
    <div className='footer'>
      <ul className='footer-nav'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/posts'>Blog</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        <li><Link to='/terms'>Terms</Link></li>
        <li><Link to='/privacy'>Privacy</Link></li>
      </ul>
      <div className='footer-social'>
        <Link to='https://www.facebook.com/shoreshdavidbrandon/' target='_blank'>
          <i className='fa fa-facebook-square'></i>
        </Link>
        <Link to='https://www.pinterest.com/shoreshdavidbrandon/' target='_blank'>
          <i className='fa fa-pinterest-square'></i>
        </Link>
        <Link to='https://www.youtube.com/c/shoreshdavidbrandon/' target='_blank'>
          <i className='fa fa-youtube-square'></i>
        </Link>
      </div>
    </div>
  );
}