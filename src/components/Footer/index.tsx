import { faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import { Link } from 'react-router-dom';

import './footer.scss';

export const Footer = () => {
  return (
    <footer>
      <div className="footer-copyright">
        <span>
          © 2014 - 2019 Shoresh David of Brandon | All Rights Reserved |{' '}
          <Link to="/privacy-policy"> Privacy Policy</Link>
        </span>
        <div className="footer-social">
          {/* Facebook */}
          <a
            href="https://www.facebook.com/shoreshdavidbrandon/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          {/* YouTube */}
          <a
            href="https://www.youtube.com/channel/UC1yOFqmKt-1ruHxg6fBiAFg?view_as=subscriber"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </div>
      </div>
    </footer>
  );
};
