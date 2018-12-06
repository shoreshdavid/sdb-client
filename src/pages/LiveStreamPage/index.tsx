import * as React from 'react';
import { Helmet } from 'react-helmet';

import { Image } from 'components/Image';

import './stream.scss';

const donateUrl =
  // tslint:disable-next-line
  'http://www.mcssl.com/SecureCart/SecureCart.aspx?mid=2C37E45F-149B-4853-9879-DC5AA7B39A34&pid=0938126f8abc48f5b748f0113768436a';

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
        </div>
      </div>
      <div className="row">
        <div className="col-lg-8">
          <iframe
            id="ls_embed_1533942514"
            // tslint:disable-next-line
            src="https://livestream.com/accounts/27606702/events/8324228/player?enableInfoAndActivity=true&autoPlay=true&mute=false"
            // style={{ height: '100%', width: '100%', minHeight: 300 }}
            frameBorder="0"
            scrolling="no"
            allowFullScreen
            className="stream-iframe"
          />
        </div>
        <div className="col-lg-4">
          <a href={donateUrl} target="_blank" rel="noopener noreferrer">
            <button className="btn btn-primary btn-block">
              Please Donate Here Now – Thank You!
            </button>
          </a>
        </div>
      </div>
    </div>
  </React.Fragment>
);
