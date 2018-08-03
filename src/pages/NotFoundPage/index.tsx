import * as React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Form, Input, Row } from 'reactstrap';

export const NotFoundPage = () => {
  return (
    <Container fluid className="not-found-container clearfix">
      <Row>
        <h2 className="not-found-page-title">
          Oops, This Page Could Not Be Found!{' '}
        </h2>
      </Row>
      <Row>
        <Col>
          <div className="not-found-status-code">404</div>
        </Col>
        <Col>
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
        </Col>
        <Col>
          <h3 className="not-found-col-heading">Search Our Website</h3>
          <p>Can't find what you need? Take a moment and do a search below!</p>
          <Form>
            <label>Search for:</label>
            <Input
              type="text"
              name="search"
              className="searchbar"
              placeholder="Search..."
              aria-required="true"
              aria-label="Search ..."
            />
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
