import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import { Image } from '../../components/Image';

import './stream.scss';

const SDBLogo = require('../../assets/img/sdb-logo-md.png');

export const LiveStreamPage = () => (
  <React.Fragment>
    <Helmet>
      <title>Live Streaming | Shoresh David Brandon</title>
    </Helmet>
    <div className="container-fluid padding-100">
      <div className="row">
        <div className="live-meta">
          <Image
            src={SDBLogo}
            alt="Shoresh David Brandon Logo"
            className="lazyload img-fluid"
          />
          <h2>Watch Us LIVE!</h2>
          <h5>Every Friday at 8:00pm est.</h5>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-8">
          <iframe
            src="https://www.youtube.com/embed/live_stream?channel=UC1yOFqmKt-1ruHxg6fBiAFg&autoplay=1"
            frameBorder="0"
            scrolling="no"
            allowFullScreen
            className="stream-iframe"
          />
        </div>
        <div className="col-lg-4">
          <Link to="/donate" target="_blank" rel="noopener noreferrer">
            <button className="btn btn-primary btn-block">
              Please Donate Here Now – Thank You!
            </button>
          </Link>
        </div>
      </div>
    </div>
  </React.Fragment>
);
