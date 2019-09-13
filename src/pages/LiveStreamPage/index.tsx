import * as React from 'react';
import { Helmet } from 'react-helmet';

import { Image } from 'components/Image';

import { Link } from 'react-router-dom';
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
          <p>Every Friday at 7:30pm est.</p>
          <p>If you are seeing last week's live stream, please hard refresh this page. <a href="https://www.getfilecloud.com/blog/2015/03/tech-tip-how-to-do-hard-refresh-in-browsers/#.XTJTopNKhBw" target="_blank">Click here for a how-to.</a></p>
          <p>If that doesn't help or you are on a mobile device, try going to our YouTube channel (and Subscribe so you get notifications) at <a href="https://www.youtube.com/watch?v=uoWrAP7gsIk">this link.</a></p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-8">
          <iframe
            src="https://www.youtube.com/embed/VsTe0VfXxOk"
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
