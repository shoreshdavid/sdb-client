import * as React from 'react';

export const DonatePage = () => (
  <div className="container-fluid padding-50">
    <div className="col-sm-12 col-lg-8 offset-lg-2 col-xl-6 offset-xl-3">
      <h1 style={{ textAlign: 'center', fontSize: 20, fontWeight: 700 }}>
        Thank You For Supporting Shoresh David Brandon
      </h1>
      <p style={{ textAlign: 'center', fontSize: 18 }}>
        (You can designate where your donation will be applied on the next page)
      </p>

      <div style={{ marginTop: 25, marginBottom: 25 }}>
        <a
          href="http://www.mcssl.com/SecureCart/ViewCart.aspx?mid=2C37E45F-
          149B-4853-9879-DC5AA7B39A34&sctoken=438e6301091e4bd09f6e7dbbd2e8d32a&bhjs=1&bhqs=1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn btn-primary btn-block">
            Donate Here - Thank You
          </button>
        </a>
      </div>

      <div>
        <p>
          <span style={{ fontWeight: 700 }}>Refund Policy:</span> There are no
          refunds on donations.
        </p>
        <p>
          <span style={{ fontWeight: 700 }}>Privacy Policy:</span> Information
          collected from our website is used only for communication and never
          sold to any 3rd parties.
        </p>
        <p>
          If you prefer to modify or delete your personal information, or
          opt-out of our email newsletter, please email our office.
        </p>
        <p>
          Shoresh David Messianic Synagogue of Brandon – 445 Lithia Pinecrest
          Rd, Brandon FL 33511
        </p>
        <p>
          <a
            href="mailto:office@shoreshdavidbrandon.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            office@shoreshdavidbrandon.org
          </a>
        </p>
        <p>
          <a href="tel:+1-813-699-4155">813-699-4155</a>
        </p>
      </div>
    </div>
  </div>
);
