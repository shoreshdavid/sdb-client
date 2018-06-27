import * as React from 'react';
import { Link } from 'react-router-dom';

export const TopBar = () => {
  return (
    <div className="topbar clearfix">
      <span className="topbar-left">
        <a href="tel:8138581328">
          <i className="fa fa-phone" />{' '}
          <span className="topbar-text">813.699.4155</span>
        </a>
        <Link to="/live">
          <i className="fa fa-video" /> Watch Us Live
        </Link>
      </span>
      {/* <div className="clearfix" /> */}
      <span className="topbar-right">
        <Link
          to="https://www.facebook.com/shoreshdavidbrandon/"
          target="_blank"
        >
          <i className="fab fa-facebook-f" />
        </Link>
        <Link
          to="https://www.youtube.com/channel/UC1yOFqmKt-1ruHxg6fBiAFg"
          target="_blank"
        >
          <i className="fab fa-youtube" />
        </Link>
      </span>
      {/* <div className="clearfix" /> */}
    </div>
  );
};
