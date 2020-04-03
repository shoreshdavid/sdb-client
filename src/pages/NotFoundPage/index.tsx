import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import './not-found.scss';

export const NotFoundPage = () => (
  <React.Fragment>
    <Helmet>
      <title>Page Not Found | Shoresh David Brandon</title>
    </Helmet>
    <div className="container-fluid padding-50">
      <div className="row">
        <h2 className="not-found-page-title">
          Oops, This Page Could Not Be Found!{' '}
        </h2>
      </div>
      <div className="row">
        <div className="col">
          <div className="not-found-status-code">404</div>
        </div>
        <div className="col">
          <h3 className="not-found-col-heading">Helpful Links</h3>
          <ul className="not-found-links">
            <li>
              <FontAwesomeIcon icon="angle-right" />
              <Link to="/">HOME</Link>
            </li>
            <li>
              <FontAwesomeIcon icon="angle-right" />
              <Link to="/services/rabbi-don">TEACHINGS</Link>
            </li>
            <li>
              <FontAwesomeIcon icon="angle-right" />
              <Link to="/live">STREAMING</Link>
            </li>
            <li>
              <FontAwesomeIcon icon="angle-right" />
              <Link to="/jewish">JEWISH</Link>
            </li>
            <li>
              <FontAwesomeIcon icon="angle-right" />
              <Link to="/discoveries/evolution">DISCOVERIES</Link>
            </li>
            <li>
              <FontAwesomeIcon icon="angle-right" />
              <Link to="/events">EVENTS</Link>
            </li>
            <li>
              <FontAwesomeIcon icon="angle-right" />
              <Link to="/store">STORE</Link>
            </li>
            <li>
              <FontAwesomeIcon icon="angle-right" />
              <Link to="/donate">DONATE</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </React.Fragment>
);
