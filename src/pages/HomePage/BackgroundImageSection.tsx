import * as React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

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
            <Button color="primary">Events</Button>
          </Link>
          <Link to="/get-healed-fast">
            <Button color="primary">Get Healed Fast</Button>
          </Link>
          <p />
          <Link to="/services">
            <Button color="primary">Latest Teachings</Button>
          </Link>
          <Link to="/events">
            <Button color="primary">Visit Us</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
