import * as React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';

export const Footer = () => {
  return (
    <footer className="footer clearfix">
      {/* Add `fluid` to Container + some padding */}
      <Container>
        <Row>
          <Col lg>
            <h4 className="footer-list-title">Shoresh David of Brandon</h4>
            <ul className="footer-list">
              <li>
                <i className="fa fa-home" style={{ color: '#717171' }} />
                <p>
                  Synagogue Location<br />
                  445 Lithia Pinecrest Rd.<br />
                  Brandon, FL 33511
                </p>
              </li>
              <li>
                <span>
                  <i className="fa fa-phone" style={{ color: '#717171' }} />
                </span>
                813-699-4155
              </li>
              <li>
                <i className="fa fa-envelope" style={{ color: '#717171' }} />

                <a
                  style={{ padding: 0, borderBottom: 'none' }}
                  href="mailto:rabbi@1messiah.org"
                >
                  rabbi@1messiah.org
                </a>
              </li>
              <li>
                <i className="fa fa-clock" style={{ color: '#717171' }} />
                Friday Service: 7:30pm
              </li>
            </ul>
          </Col>
          <Col lg>
            <h4 className="footer-list-title">About Us</h4>
            <ul className="footer-list">
              <li>
                <Link to="/about-us">Our Rabbi</Link>
              </li>
              <li>
                <Link to="/about-us">Our Ministries</Link>
              </li>
              <li>
                <Link to="/about-us">Our Mission</Link>
              </li>
            </ul>
          </Col>
          <Col lg>
            <h4 className="footer-list-title">Resources</h4>{' '}
            <ul className="footer-list">
              <li>
                <Link to="https://mjaa.org/" target="_blank">
                  MJAA
                </Link>
              </li>
              <li>
                <Link to="https://www.messianictimes.com" target="_blank">
                  Messianic Times
                </Link>
              </li>
              <li>
                <Link to="https://www.tlvbiblesociety.org" target="_blank">
                  TLV Bible Society
                </Link>
              </li>
              <li>
                <Link to="https://www.jewishvoice.org" target="_blank">
                  Jewish Voice
                </Link>
              </li>
              <li>
                <Link
                  to="http://realmessiah.com/index.php/en/answers"
                  target="_blank"
                >
                  Real Messiah
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
