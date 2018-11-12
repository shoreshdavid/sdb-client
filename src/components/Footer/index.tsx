import * as React from 'react';
import { Link } from 'react-router-dom';

import './footer.scss';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-copyright">
        <div>
          2018 © Shoresh David of Brandon | All Rights Reserved |{' '}
          <Link to="/privacy-policy">Privacy Policy</Link>
        </div>
      </div>

      <div className="footer-social">
        {/* Facebook */}
        <a
          href="https://www.facebook.com/shoreshdavidbrandon/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook" />
        </a>
        {/* Twitter */}
        <a
          href="https://twitter.com/shoreshdavid"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-twitter" />
        </a>
        {/* Twitter */}
        <a
          href="https://instagram.com/shoreshdavidbrandon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram" />
        </a>
        {/* YouTube */}
        <a
          href="https://www.youtube.com/channel/UC1yOFqmKt-1ruHxg6fBiAFg?view_as=subscriber"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-youtube" />
        </a>
        {/* Medium */}
        <a
          href="https://medium.com/@shoreshdavidbrandon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-medium" />
        </a>
        {/* Anchor */}
        <a
          href="https://anchor.fm/shoresh-david-brandon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fas fa-anchor" />
        </a>
      </div>
    </footer>
  );
};
