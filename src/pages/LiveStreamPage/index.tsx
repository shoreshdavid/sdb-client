import * as React from 'react';
import { Button, Col, Container, Row } from 'reactstrap';

const baseUrl = 'http://www.mcssl.com/SecureCart/SecureCart.aspx';
const restUrl =
  '?mid=2C37E45F-149B-4853-9879-DC5AA7B39A34&pid=0938126f8abc48f5b748f0113768436a';
const fullUrl = baseUrl + restUrl;

export const LiveStreamPage = () => {
  return (
    <React.Fragment>
      <Container fluid>
        <div className="padding-100">
          <Row>
            <div className="live-meta">
              <img
                src="https://tikvaproductions.com/wp-content/uploads/2018/02/page-1-tree.png"
                alt=""
                className="img-fluid"
              />

              <h2>Watch Us LIVE!</h2>
              <p>Every Friday at 7:30pm est.</p>
            </div>
          </Row>
          <Row>
            <Col>
              <iframe
                src="http://embed.truthcasting.com/video/100002774/161796"
                scrolling="no"
                allowFullScreen
                className="livestream-iframe"
              />
            </Col>
            <Col lg="6">
              <a href={fullUrl} target="_blank">
                <Button color="primary" block>
                  Please Donate Here Now – Thank You!
                </Button>
              </a>
            </Col>
          </Row>
        </div>
      </Container>
    </React.Fragment>
  );
};
