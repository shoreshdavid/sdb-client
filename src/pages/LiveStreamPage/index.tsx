import { EmailBanner } from 'components/EmailBanner';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { Button, Col, Container, Row } from 'reactstrap';

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
            <Col xs="12" sm="12" lg="6">
              <iframe
                style={{
                  width: '100%',
                  height: 'auto',
                  overflow: 'hidden',
                  borderStyle: 'none',
                }}
                src="http://embed.truthcasting.com/video/100002774/161796"
                scrolling="no"
                // width={640}
                // height={360}
                allowFullScreen
              />
            </Col>
            <Col xs="12" sm="12" lg="6">
              <h2 className="center">Donate Now!</h2>
              <Link to="/donations">
                <Button color="primary" block>
                  Click Here
                </Button>
              </Link>
            </Col>
          </Row>
        </div>
      </Container>
      <EmailBanner />
    </React.Fragment>
  );
};
