import * as React from 'react';
import { Col, Container } from 'reactstrap';

export const AboutSection = () => {
  return (
    <Container fluid id="aboutSection" className="about-container">
      <Col lg={{ size: 8, offset: 2 }}>
        <div style={{ textAlign: 'center', marginBottom: 20 }}>
          <img
            src="https://tikvaproductions.com/wp-content/uploads/2018/02/page-1-tree.png"
            alt="Shoresh David Brandon Logo"
            className="img-fluid"
          />
        </div>
        <h2 style={{ textAlign: 'center', marginBottom: 20, color: 'black' }}>
          Our Mission
        </h2>
        <hr className="brand-hr" style={{ width: 200, marginBottom: 20 }} />
        <p className="secondary-text" style={{ textAlign: 'justify' }}>
          Our mission can be summed up as follows. People everywhere need to be
          healed of many things, both mental/emotional and physical diseases. In
          addition, there are billions worldwide who have not accepted Yeshua as
          their Messiah. Therefore, we reach out internationally with our
          healing teachings and more to positively change their lives. For He
          said: “I am the way, the truth, and the life! No one comes to the
          Father except through Me.” Go to{' '}
          <a
            href="http://gethealedfast.com/"
            target="_blank"
            rel="nofollow noopener"
          >
            http://gethealedfast.com
          </a>{' '}
          for our healing teachings... and{' '}
          <a href="https://tikvaproductions.com/wp-content/uploads/2018/04/friendbook9thPrinting.pdf">
            <strong>click here</strong>
          </a>{' '}
          to read Rabbi Don’s worldwide best selling book for free
        </p>
      </Col>
    </Container>
  );
};
