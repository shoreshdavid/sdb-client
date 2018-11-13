import { Image } from 'components/Image';
import * as React from 'react';

export const AboutSection = () => {
  return (
    <div id="aboutSection" className="container-fluid about-container">
      <div className="col-lg-8 offset-lg-2">
        <div style={{ textAlign: 'center', marginBottom: 20 }}>
          <Image
            src="https://s3.amazonaws.com/images.shoreshdavidbrandon.com/home-sdb-logo.png"
            alt="Shoresh David Brandon Logo"
            className="lazyload img-fluid"
          />
        </div>
        <h2 style={{ textAlign: 'center', marginBottom: 20, color: 'black' }}>
          Our Mission
        </h2>
        <hr className="brand-hr" style={{ width: 200, marginBottom: 20 }} />
        <p className="secondary-text">
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
          <a
            href="https://s3.amazonaws.com/images.shoreshdavidbrandon.com/pdf/friend-book-ninth-printing.pdf"
            target="_blank"
            rel="noreferrer noopener"
          >
            <strong>click here</strong>
          </a>{' '}
          to read Rabbi Don’s worldwide best selling book for free
        </p>
      </div>
    </div>
  );
};
