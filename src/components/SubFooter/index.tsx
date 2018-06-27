import * as React from 'react';
import { Link } from 'react-router-dom';

export const SubFooter = () => {
  return (
    <footer className="subfooter clearfix">
      <div className="subfooter-copyright">
        <div>2018 © Shoresh David of Brandon | All Rights Reserved </div>
      </div>

      <div className="subfooter-social">
        <Link
          to="https://www.facebook.com/shoreshdavidbrandon/"
          target="_blank"
        >
          <i className="fab fa-facebook-f" />
        </Link>
        <Link
          to="https://www.youtube.com/channel/UC1yOFqmKt-1ruHxg6fBiAFg?view_as=subscriber"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-youtube" />
        </Link>
      </div>
    </footer>
  );
};
