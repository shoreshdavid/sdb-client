import * as React from 'react';
import { Container } from 'reactstrap';

export const RabbiSection = () => {
  return (
    <Container fluid className="rabbi-container">
      <div className="center">
        <img
          src="https://tikvaproductions.com/wp-content/uploads/2018/03/rabbiDonCircle.png"
          alt="Rabbi Don Goldstein"
          className="img-fluid"
        />
      </div>
      <div className="center" style={{ margin: '40px 0' }}>
        <h2 style={{ color: 'black' }}>Rabbi Don</h2>
      </div>
      <hr className="brand-hr" style={{ width: 200 }} />
      <p>
        Rabbi Don Goldstein leads&nbsp;Shoresh David Messianic Synagogue in
        Brandon. Here you will meet both Jews and Gentiles who are genuinely
        warm, loving, friendly and caring. Ours is not your standard boring
        service where you come, listen, go home and nothing changes. We don’t
        talk about what God “can” do, you’ll see Him do it! Rabbi Don’s messages
        come from God’s Word and are delivered in an easy to understand way. You
        can view his past messages by&nbsp;<a href="https://tikvaproductions.com/sdb/videos/">
          <span>clicking here.</span>
        </a>
      </p>
      <p>
        We invite you to come and worship the God of Abraham, Isaac and Jacob
        with Messianic Music, Davidic Dance, anointed teachings, and life
        changing healings. We also encourage you to spend some time exploring
        our unique website. If you would like to know what we believe, view our
        Statement of Faith by&nbsp;<a href="/#statement">
          <span>clicking here</span>
        </a>.
      </p>
      <p>
        Both Rabbi Don and Jackie were born and raised Jewish so their teachings
        come from their genuine Jewish experience and their 30+ years of walking
        with the Messiah. So come! Discover your roots as they are clearly
        explained.
      </p>
    </Container>
  );
};
