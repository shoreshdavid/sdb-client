import { EmailBanner } from 'components/EmailBanner';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { Button, Col, Container } from 'reactstrap';

const donateLink =
  'http://www.mcssl.com/SecureCart/ViewCart.aspx?mid=2C37E45F-149B-4853-9879-DC5AA7B39A34&sctoken=438e6301091e4bd09f6e7dbbd2e8d32a&bhjs=1&bhqs=1';

export const DonatePage = () => (
  <React.Fragment>
    <Container fluid className="donate-page">
      <Col sm="12" lg={{ size: 8, offset: 2 }}>
        <div style={{ textAlign: 'center', marginBottom: 50, marginTop: 50 }}>
          <i className="donate-child-icon fa fa-child" />
        </div>
        <p style={{ textAlign: 'center', fontSize: 20 }}>
          We appreciate your donation. Out of all funds that we receive each
          month, we in-turn tithe out 10% to ministries that help the poor, stop
          abortion, stop human trafficking and abuse. In addition, your
          donations will also support several ministries that are an outreach to
          pre-believers world-wide. These ministries include:
        </p>

        <hr style={{ width: 250 }} />

        <ul className="donate-ul">
          <li>
            <i className="fa fa-check" style={{ color: '#f09a3e' }} />
            <Link to="http://www.shipstv.org/blindeyesopened/">
              Ships of Tarshish (human trafficking)
            </Link>
          </li>
          <li>
            <i className="fa fa-check" style={{ color: '#f09a3e' }} />
            <Link to="http://www.newlifesolutions.org">
              New Life Solutions – Anti-Abortion
            </Link>
          </li>
          <li>
            <i className="fa fa-check" style={{ color: '#f09a3e' }} />
            <Link to="https://mjaa.org/donations/joseph-project/">
              MJAA Joseph Project (Helping the poor in Israel)
            </Link>
          </li>
          <li>
            <i className="fa fa-check" style={{ color: '#f09a3e' }} />
            <Link to="https://reachii.org/">
              Reach Initiative International (Helping Holocaust survivors,
              orphans, and shut-ins)
            </Link>
          </li>
          <li>
            <i className="fa fa-check" style={{ color: '#f09a3e' }} />
            <Link to="https://www.oneforisrael.org/">One For Israel</Link>
          </li>
          <li>
            <i className="fa fa-check" style={{ color: '#f09a3e' }} />
            <Link to="http://awmi.net/">Andrew Wommack Ministries</Link>
          </li>
          <li>
            <i className="fa fa-check" style={{ color: '#f09a3e' }} />
            <Link to="https://www.messianictimes.com/">Messianic Times</Link>
          </li>
          <li>
            <i className="fa fa-check" style={{ color: '#f09a3e' }} />
            <Link to="https://www.jewishvoice.org/">Jewish Voice</Link>
          </li>
          <li>
            <i className="fa fa-check" style={{ color: '#f09a3e' }} />
            <Link to="http://www.ymja.org">YMJA</Link>
          </li>
          <li>
            <i className="fa fa-check" style={{ color: '#f09a3e' }} />
            <Link to="http://iamcs.org/">IAMCS</Link>
          </li>
          <li>
            <i className="fa fa-check" style={{ color: '#f09a3e' }} />
            <Link to="http://www.jewishjewels.org/">Jewish Jewels</Link>
          </li>
        </ul>
        <Link to={donateLink} target="_blank" rel="noopener noreferrer">
          <Button block color="primary">
            Donate Now
          </Button>
        </Link>
      </Col>
    </Container>
    <EmailBanner />
  </React.Fragment>
);
