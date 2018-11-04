import { Image } from 'components/Image';
import * as React from 'react';
import { Button, Col, Container, Row } from 'reactstrap';

const baseUrl = 'http://www.mcssl.com/SecureCart/SecureCart.aspx';
const restUrl =
  '?mid=2C37E45F-149B-4853-9879-DC5AA7B39A34&pid=0938126f8abc48f5b748f0113768436a';
const fullUrl = baseUrl + restUrl;

export const LiveStreamPage = () => {
  return (
    <Container fluid>
      <div className="padding-100">
        <Row>
          <div className="live-meta">
            <Image
              src="https://s3.amazonaws.com/images.shoreshdavidbrandon.com/home-sdb-logo.png"
              alt=""
              className="img-fluid"
            />

            <h2>Watch Us LIVE!</h2>
            <p>Every Friday at 7:30pm est.</p>
          </div>
        </Row>
        <Row>
          <Col lg="8">
            <iframe
              id="ls_embed_1533942514"
              // tslint:disable-next-line
              src="https://livestream.com/accounts/27606702/events/8324228/player?width=640&height=360&enableInfoAndActivity=true&autoPlay=true&mute=false"
              style={{ height: 460 }}
              frameBorder="0"
              scrolling="no"
              allowFullScreen
            />
          </Col>
          <Col lg="4">
            <a href={fullUrl} target="_blank" rel="noopener noreferrer">
              <Button color="primary" block>
                Please Donate Here Now – Thank You!
              </Button>
            </a>
          </Col>
        </Row>
      </div>
    </Container>
  );
};
