import * as React from 'react';
import { Helmet } from 'react-helmet';

import cards from '../../assets/img/cards.png';

import './donate.scss';

// tslint:disable
const buttons = [
  {
    text: 'ONE-TIME DONATIONS HERE – THANK YOU!',
    link: `http://www.mcssl.com/SecureCart/SecureCart.aspx?mid=2C37E45F-149B-4853-9879-DC5AA7B39A34&pid=0938126f8abc48f5b748f0113768436a`,
  },
  {
    text: '$10.00 MONTHLY DONATIONS HERE – THANK YOU!',
    link: `http://www.mcssl.com/SecureCart/SecureCart.aspx?mid=2C37E45F-149B-4853-9879-DC5AA7B39A34&pid=e0ceb882e1ab4d13ac7dc87afbbfa7f1`,
  },
  {
    text: '$25.00 MONTHLY DONATIONS HERE – THANK YOU!',
    link: `http://www.mcssl.com/SecureCart/SecureCart.aspx?mid=2C37E45F-149B-4853-9879-DC5AA7B39A34&pid=602dba4754af4b63b9847146567992b9`,
  },
  {
    text: '$50.00 MONTHLY DONATIONS HERE – THANK YOU!',
    link: `http://www.mcssl.com/SecureCart/SecureCart.aspx?mid=2C37E45F-149B-4853-9879-DC5AA7B39A34&pid=7cdd9678352743488598313a97c232de`,
  },
  {
    text: '$100.00 MONTHLY DONATIONS HERE – THANK YOU!',
    link: `http://www.mcssl.com/SecureCart/SecureCart.aspx?mid=2C37E45F-149B-4853-9879-DC5AA7B39A34&pid=1a3140b6f0764d6586ec56be2fed4601`,
  },
  {
    text: '$250.00 MONTHLY DONATIONS HERE – THANK YOU!',
    link: `http://www.mcssl.com/SecureCart/SecureCart.aspx?mid=2C37E45F-149B-4853-9879-DC5AA7B39A34&pid=f3592581987b443dba5a701e980c9768`,
  },
  {
    text: '$400.00 MONTHLY DONATIONS HERE – THANK YOU!',
    link: `http://www.mcssl.com/SecureCart/SecureCart.aspx?mid=2C37E45F-149B-4853-9879-DC5AA7B39A34&pid=357d061510534d11bd60681a5aa29f75`,
  },
  {
    text: '$500.00 MONTHLY DONATIONS HERE – THANK YOU!',
    link: `http://www.mcssl.com/SecureCart/SecureCart.aspx?mid=2C37E45F-149B-4853-9879-DC5AA7B39A34&pid=4c7f2c62537a40158a33c5db5dc41386`,
  },
];

export const DonatePage = () => (
  <React.Fragment>
    <Helmet>
      <title>Donate To Shoresh David Brandon</title>
    </Helmet>
    <div className="container-fluid donate padding-50">
      <div className="col-xs-12 col-sm-12 col-lg-8 offset-lg-2 col-xl-6 offset-xl-3">
        <h1>Thank You For Supporting Shoresh David Brandon</h1>
        <p>
          (You can designate where your donation will be applied on the next
          page)
        </p>
        <div style={{ textAlign: 'center' }}>
          <img src={cards} alt="credit card icons" />
        </div>

        {buttons.map((b, i) => (
          <div style={{ marginTop: 25, marginBottom: 25 }} key={i}>
            <a href={b.link} target="_blank" rel="noopener noreferrer">
              <button className="btn btn-primary">{b.text}</button>
            </a>
          </div>
        ))}

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
  </React.Fragment>
);
