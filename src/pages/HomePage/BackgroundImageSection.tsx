import * as React from 'react';
import { Link } from 'react-router-dom';

export const BackgroundImageSection = () => {
  return (
    <div className="parallax">
      <div>
        <h1 className="parallax-header">A Joyous Messianic Synagogue</h1>
        <h3 className="parallax-subheader">
          Where both Jews and non-Jews worship in loving harmony.
        </h3>
        <div className="parallax-button-group">
          <Link to="/events">
            <button className="btn btn-primary">Events</button>
          </Link>
          <a href="https://gethealedfast.com" target="_blank">
            <button className="btn btn-primary">Get Healed Fast</button>
          </a>
          <p />
          <Link to="/services">
            <button className="btn btn-primary">Latest Teachings</button>
          </Link>
          <Link to="/events">
            <button className="btn btn-primary">Visit Us</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
