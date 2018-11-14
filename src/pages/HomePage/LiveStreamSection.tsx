import * as React from 'react';
import { Link } from 'react-router-dom';
import {
  faDesktop,
  faVideo,
  faFileVideo,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const LiveStreamSection = () => {
  return (
    <div id="#liveNow" className="container-fluid live-stream-container">
      <div className="mobile-hidden">
        <svg
          id="bigTriangleCandy"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width="100%"
          height="100"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          style={{ fill: '#ffffff', padding: 0 }}
        >
          <path d="M-1 -1 L50 99 L101 -1 Z" />
        </svg>
      </div>
      <div className="desktop-icon">
        <FontAwesomeIcon icon={faDesktop} />
      </div>
      <h2>Teachings that will change your life!</h2>
      <p>
        Rabbi Don offers a wide range of high quality teachings and resources.
      </p>
      <div style={{ margin: '40px 0' }}>
        <hr className="brand-hr" style={{ width: 200 }} />
      </div>
      <div className="live-btn-group">
        <Link to="/live">
          <button className="btn btn-primary">
            <FontAwesomeIcon icon={faVideo} />
            LIVE Streaming every Friday @ 7:30pm (CLICK HERE)
          </button>
        </Link>
        <Link to="/services">
          <button className="btn btn-primary">
            <FontAwesomeIcon icon={faFileVideo} />
            Recordings of recent messages
          </button>
        </Link>
      </div>
    </div>
  );
};
