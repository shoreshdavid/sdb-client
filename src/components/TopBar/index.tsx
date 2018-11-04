import * as React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from 'reactstrap';

export const TopBar = () => {
  return (
    <div className="topbar">
      <div className="topbar-left">
        {/* Phone */}
        <a href="tel:8136994155">
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
          <a
            // tslint:disable-next-line
            href="https://www.google.com/maps/place/445+Lithia+Pinecrest+Rd,+Brandon,+FL+33511/@27.9312622,-82.2778947,17z/data=!3m1!4b1!4m5!3m4!1s0x88c2cdb75c8a78c5:0x7afa5e06b1d0c2ca!8m2!3d27.9312622!4d-82.275706"
            target="_blank"
          >
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
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook-f" />
        </Link>
        <Link
          to="https://www.youtube.com/channel/UC1yOFqmKt-1ruHxg6fBiAFg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-youtube" />
        </Link>
      </div>
    </div>
  );
};
