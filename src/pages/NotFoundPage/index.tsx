import * as React from 'react';
import { Link } from 'react-router-dom';

import './not-found.scss';

export const NotFoundPage = () => {
  return (
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
              <i className="fa fa-angle-right" />
              <Link to="/">HOME</Link>
            </li>
            <li>
              <i className="fa fa-angle-right" />
              <Link to="/services">TEACHINGS</Link>
            </li>
            <li>
              <i className="fa fa-angle-right" />
              <Link to="/live">STREAMING</Link>
            </li>
            <li>
              <i className="fa fa-angle-right" />
              <Link to="/jewish">JEWISH</Link>
            </li>
            <li>
              <i className="fa fa-angle-right" />
              <Link to="/discoveries">DISCOVERIES</Link>
            </li>
            <li>
              <i className="fa fa-angle-right" />
              <Link to="/events">EVENTS</Link>
            </li>
            <li>
              <i className="fa fa-angle-right" />
              <Link to="/store">STORE</Link>
            </li>
            <li>
              <i className="fa fa-angle-right" />
              <Link to="/donate">DONATE</Link>
            </li>
          </ul>
        </div>
        <div className="col">
          <h3 className="not-found-col-heading">Search Our Website</h3>
          <p>Can't find what you need? Take a moment and do a search below!</p>
          <form>
            <label>Search for:</label>
            <input
              type="text"
              name="search"
              className="form-control searchbar"
              placeholder="Search..."
              aria-required="true"
              aria-label="Search ..."
            />
          </form>
        </div>
      </div>
    </div>
  );
};
