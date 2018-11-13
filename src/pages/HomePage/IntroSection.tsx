import * as React from 'react';
import { Link } from 'react-router-dom';

import { Image } from 'components/Image';

const SDBLogo = require('../../assets/img/sdb-logo-md.png');

export const IntroSection = () => {
  return (
    <div className="container-fluid intro-container">
      <div>
        <div className="col-lg-8 offset-lg-2 col-xl-6 offset-lg-3">
          <div style={{ textAlign: 'center', marginBottom: 80 }}>
            <Image
              src={SDBLogo}
              width={82}
              height={89}
              alt="Shoresh David Brandon Logo"
              className="lazyload img-fluid"
            />
            <hr className="brand-hr" />
            <h3 className="intro-container-address">
              445 Lithia Pinecrest Rd. Brandon, FL 33511
            </h3>
            <div className="intro-container-break">
              <h3 className="center">Phone: 813-699-4155</h3>
              <h3 className="center">Friday Service: 7:30pm</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-7">
          <h3>WHY COME TO SHORESH DAVID BRANDON?</h3>
          <p>
            In our joyous Messianic Synagogue, you will meet both Jews and
            non-Jews who are genuinely warm, loving, friendly and caring. Ours
            is not your standard boring service where you come, listen, go home
            and nothing changes. We don’t talk about what God “can” do, you’ll
            see Him do it! Rabbi Don’s messages come from God’s Word and are
            delivered in an easy to understand way. You can view his past
            messages by clicking <Link to="/services">here</Link>.
          </p>
          <p>
            We invite you to come and worship the God of Abraham, Isaac and
            Jacob with Messianic Music, Davidic Dance, anointed teachings, and
            life changing healings. We also encourage you to spend some time
            exploring this website, because it is loaded with a lot of great
            information.
          </p>
          <p>
            Both Rabbi Don and Jackie were born and raised Jewish so their
            teachings come from their genuine Jewish experience and their 30+
            years of walking with the Messiah. So come! Discover your roots as
            they are clearly explained.
          </p>
        </div>
        <div className="col-lg-5">
          <iframe
            src="//player.vimeo.com/video/152749226?autoplay=0&autopause=0"
            className="lazyload"
            allowFullScreen
            width="100%"
          />
        </div>
      </div>
    </div>
  );
};
