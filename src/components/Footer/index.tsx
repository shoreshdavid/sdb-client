import * as React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './footer.scss';

import {
  faFacebook,
  faInstagram,
  faMedium,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { faAnchor } from '@fortawesome/free-solid-svg-icons';

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
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        {/* Twitter */}
        <a
          href="https://twitter.com/shoreshdavid"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        {/* Twitter */}
        <a
          href="https://instagram.com/shoreshdavidbrandon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        {/* YouTube */}
        <a
          href="https://www.youtube.com/channel/UC1yOFqmKt-1ruHxg6fBiAFg?view_as=subscriber"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faYoutube} />
        </a>
        {/* Medium */}
        <a
          href="https://medium.com/@shoreshdavidbrandon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faMedium} />
        </a>
        {/* Anchor */}
        <a
          href="https://anchor.fm/shoresh-david-brandon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faAnchor} />
        </a>
      </div>
    </footer>
  );
};
