import { Image } from 'components/Image';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container } from 'reactstrap';

export const RabbiSection = () => {
  return (
    <Container fluid className="rabbi-container">
      <Col lg={{ size: 8, offset: 2 }}>
        <div className="center">
          <Image
            src="https://s3.amazonaws.com/images.shoreshdavidbrandon.com/rabbi-don-circle.png"
            alt="Rabbi Don Goldstein"
            className="img-fluid"
          />
        </div>
        <div className="center" style={{ margin: '40px 0' }}>
          <h3>Rabbi Don</h3>
        </div>
        <hr className="brand-hr" style={{ width: 200 }} />
        <p>
          Rabbi Don Goldstein leads&nbsp;Shoresh David Messianic Synagogue in
          Brandon. Here you will meet both Jews and Gentiles who are genuinely
          warm, loving, friendly and caring. Ours is not your standard boring
          service where you come, listen, go home and nothing changes. We don’t
          talk about what God “can” do, you’ll see Him do it! Rabbi Don’s
          messages come from God’s Word and are delivered in an easy to
          understand way. You can view his past messages by&nbsp;<Link to="/services">
            <span>clicking here.</span>
          </Link>
        </p>
        <p>
          We invite you to come and worship the God of Abraham, Isaac and Jacob
          with Messianic Music, Davidic Dance,Anointed Teachings, and Life
          Changing Healings. We also encourage you to spend some time exploring
          our unique website.
        </p>
        <p>
          Both Rabbi Don and Jackie were born and raised Jewish so their
          teachings come from their genuine Jewish experience and their 30+
          years of walking with the Messiah. So come! Discover your roots as
          they are clearly explained.
        </p>
      </Col>
    </Container>
  );
};
