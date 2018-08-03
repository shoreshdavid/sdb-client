import * as React from 'react';
import { Button, Col, Container } from 'reactstrap';

const DonateListItem = ({ link, title }) => (
  <li>
    <i className="fa fa-check" style={{ color: '#f09a3e' }} />
    <a href={link} target="_blank">
      {title}
    </a>
  </li>
);

export const DonatePage = () => (
  <React.Fragment>
    <Container fluid className="padding-50">
      <Col sm="12" lg={{ size: 8, offset: 2 }} xl={{ size: 6, offset: 3 }}>
        <div className="donate-child-icon">
          <i className=" fa fa-child" />
        </div>
        <p style={{ textAlign: 'center', fontSize: 20 }}>
          We appreciate your donation. Out of all funds that we receive each
          month, we in-turn tithe out 10% to ministries that help the poor, stop
          abortion, stop human trafficking and abuse. In addition, your
          donations will also support several ministries that are an outreach to
          pre-believers world-wide. These ministries include:
        </p>

        <div style={{ marginTop: 25, marginBottom: 25 }}>
          <a
            href="http://www.mcssl.com/SecureCart/ViewCart.aspx?mid=2C37E45F-
          149B-4853-9879-DC5AA7B39A34&sctoken=438e6301091e4bd09f6e7dbbd2e8d32a&bhjs=1&bhqs=1"
            target="_blank"
          >
            <Button block color="primary">
              Donate Now
            </Button>
          </a>
        </div>

        <ul className="donate-ul">
          <DonateListItem
            link="http://www.shipstv.org/blindeyesopened/"
            title="Ships of Tarshish (human trafficking)"
          />
          <DonateListItem
            link="http://www.newlifesolutions.org"
            title="New Life Solutions – Anti-Abortion"
          />

          <DonateListItem
            link="https://mjaa.org/donations/joseph-project/"
            title="MJAA Joseph Project (Helping the poor in Israel)"
          />
          <DonateListItem
            link="https://reachii.org/"
            title="Reach Initiative International (Helping Holocaust survivors, orphans, and shut-ins)"
          />
          <DonateListItem
            link="https://www.oneforisrael.org/"
            title="One For Israel"
          />
          <DonateListItem
            link="http://awmi.net/"
            title="Andrew Wommack Ministries"
          />
          <DonateListItem
            link="https://www.messianictimes.com/"
            title="Messianic Times"
          />
          <DonateListItem
            link="https://www.jewishvoice.org/"
            title="Jewish Voice"
          />
          <DonateListItem link="http://www.ymja.org" title="YMJA" />
          <DonateListItem link="http://iamcs.org/" title="IAMCS" />
          <DonateListItem
            link="http://www.jewishjewels.org/"
            title="Jewish Jewels"
          />
        </ul>
        <a
          href="http://www.mcssl.com/SecureCart/ViewCart.aspx?mid=2C37E45F-
          149B-4853-9879-DC5AA7B39A34&sctoken=438e6301091e4bd09f6e7dbbd2e8d32a&bhjs=1&bhqs=1"
          target="_blank"
        >
          <Button block color="primary">
            Donate Now
          </Button>
        </a>
      </Col>
    </Container>
  </React.Fragment>
);
