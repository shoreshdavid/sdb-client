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
          <Link to="/services/get-healed-fast/how-to-get-healed-and-stay-healed?part=1">
            <button className="btn btn-primary">Get Healed Fast</button>
          </Link>
          <p />
          <Link to="/services/rabbi-don">
            <button className="btn btn-primary">Latest Teachings</button>
          </Link>
          <a
            // tslint:disable-next-line
            href="https://www.google.com/maps/place/445+Lithia+Pinecrest+Rd,+Brandon,+FL+33511/@27.9312622,-82.2778947,17z/data=!3m1!4b1!4m5!3m4!1s0x88c2cdb75c8a78c5:0x7afa5e06b1d0c2ca!8m2!3d27.9312622!4d-82.275706"
            target="_blank"
          >
            <button className="btn btn-primary">Visit Us</button>
          </a>
        </div>
      </div>
    </div>
  );
};
