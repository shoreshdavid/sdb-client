import * as React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from 'reactstrap';

export const TopBar = () => {
  return (
    <div className="topbar">
      <div className="topbar-left">
        {/* Phone */}
        <a href="tel:8138581328">
          <i className="fa fa-phone" />{' '}
          <span className="topbar-text">813.699.4155</span>
        </a>
        {/* Email */}
        <div>
          <a href="mailto:rabbi@1messiah.org">
            <i className="fa fa-envelope" />
            rabbi@1messiah.org
          </a>
        </div>
        {/* Address */}
        <div>
          <a href="#">
            <i className="fa fa-home" />
            445 Lithia Pinecrest Rd. Brandon, FL 33511
          </a>
        </div>
        {/* Live Stream */}
        <Link to="/live">
          <i className="fa fa-video" /> Watch Us Live<Badge
            color="danger"
            style={{ padding: 6, marginLeft: 10 }}
          >
            Fridays @ 7:30PM
          </Badge>
        </Link>
      </div>
      <div className="topbar-right">
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
      </div>
    </div>
  );
};
