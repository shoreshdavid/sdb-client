import { EmailBanner } from 'components/EmailBanner';
import { AboutSection } from 'pages/HomePage/AboutSection';
import { IntroSection } from 'pages/HomePage/IntroSection';
import { LiveStreamSection } from 'pages/HomePage/LiveStreamSection';
import { MapSection } from 'pages/HomePage/MapSection';
import { RabbiSection } from 'pages/HomePage/RabbiSection';
// import { Slider } from 'pages/HomePage/Slider';
import { StatementSection } from 'pages/HomePage/StatementSection';
import * as React from 'react';
import { Link } from 'react-router-dom';

export const HomePage = props => {
  return (
    <div>
      {/* <Slider /> */}
      <div className="parallax">
        <div>
          <h1 className="parallax-header">A Joyous Messianic Synagogue</h1>
          <h3 className="parallax-subheader">
            Where both Jews and Gentiles worship in loving harmony.
          </h3>
          <div className="parallax-button-group">
            <Link to="/events">
              <button className="button">Events</button>
            </Link>
            <Link to="/get-healed-fast">
              <button className="button">Get Healed Fast</button>
            </Link>
            <Link to="/services">
              <button className="button">Latest Teachings</button>
            </Link>
            <Link to="/events">
              <button className="button">Visit Us</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="post-content">
        <IntroSection />
        <LiveStreamSection />
        <StatementSection />
        <RabbiSection />
        <AboutSection />
        <MapSection />
        <EmailBanner />
      </div>
    </div>
  );
};
