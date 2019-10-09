import { Image } from 'components/Image';
import * as React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

import './header.scss';

const headerLogo = require('../../assets/img/header-logo.png');
const smallLogo = require('../../assets/img/sdb-logo-md.png');

export class WrappedHeader extends React.Component<any, any> {
  public state = {
    isOpen: false,
  };

  public componentDidMount() {
    document.addEventListener('click', (event: any) => {
      if (event.target.tagName.toLowerCase() === 'a') {
        this.toggle();
      }
    });
  }

  public toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  public componentWillUnmount() {
    document.addEventListener('click', () => {
      this.toggle();
    });
  }

  public render() {
    return (
      <div className="sdb-nav">
        <nav className="navbar navbar-expand-xl navbar-light">
          <Link to="/">
            {window.innerWidth < 600 ? (
              <Image
                src={smallLogo}
                style={{ width: 50, height: 50 }}
                alt="Shoresh David Brandon logo"
              />
            ) : (
              <Image src={headerLogo} alt="Shoresh David Brandon logo" />
            )}
          </Link>
          <button
            type="button"
            className="navbar-toggler"
            onClick={this.toggle}
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className={`${
              this.state.isOpen
                ? 'collapse show navbar-collapse'
                : 'collapse navbar-collapse'
            }`}
          >
            <ul className="ml-auto navbar-nav" style={{ marginRight: 25 }}>
              <li className="nav-item">
                <NavLink exact to="/" activeClassName="navlink-active">
                  Home
                </NavLink>
              </li>
              <li className="nav-item dropdown-link">
                <div className="dropdown">
                  <NavLink
                    to="/services/rabbi-don"
                    isActive={() =>
                      this.props.location.pathname.includes('services')
                    }
                    activeClassName="navlink-active"
                  >
                    Teachings
                  </NavLink>
                  <div className="dropdown-content">
                    <Link to="/services/rabbi-don">
                      Rabbi Don's Teachings &amp; Others
                    </Link>
                    <Link to="/services/get-healed-fast/how-to-get-healed-and-stay-healed">
                      Get Healed Fast
                    </Link>
                    <Link to="/services/holy-days">"Jewish" Holidays</Link>
                    <Link to="/services/end-times">End Times</Link>
                    <Link to="/services/bible-studies">Bible Studies</Link>
                    <Link to="/services/special-speakers">
                      Special Speakers
                    </Link>
                    <Link to="/services/increase-your-income">
                      Increase Your Income
                    </Link>
                    <a
                      href="https://www.ihaveafriendwhoisjewish.com/"
                      target="_blank"
                    >
                      Rabbi Don's Best Selling Book
                    </a>
                    <a
                      // tslint:disable-next-line
                      href="https://s3.amazonaws.com/images.shoreshdavidbrandon.com/pdf/discipleship-book-by-rabbi-don-goldstein.pdf"
                      target="_blank"
                    >
                      Rabbi Don's Discipleship Book
                    </a>
                  </div>
                </div>
              </li>
              {/*  */}
              <li className="nav-item">
                <NavLink
                  exact
                  to="/discoveries/usa-middle-east"
                  activeClassName="navlink-active"
                >
                  News From Israel
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact to="/books" activeClassName="navlink-active">
                  Books
                </NavLink>
              </li>
              {/*  */}
              <li className="nav-item">
                <NavLink exact to="/live" activeClassName="navlink-active">
                  Streaming
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact to="/jewish" activeClassName="navlink-active">
                  Jewish
                </NavLink>
              </li>
              {/*  */}
              <li className="nav-item dropdown-link">
                <div className="dropdown">
                  <NavLink
                    to="/discoveries/evolution"
                    isActive={() =>
                      this.props.location.pathname.includes('discoveries')
                    }
                    activeClassName="navlink-active"
                  >
                    Discoveries
                  </NavLink>
                  <div className="dropdown-content">
                    <Link to="/discoveries/evolution">Evolution</Link>
                    <Link to="/discoveries/heaven-and-hell">
                      Heaven And Hell
                    </Link>
                    <Link to="/discoveries/prophecy">Prophecy</Link>
                    <Link to="/discoveries/supernatural">Supernatural</Link>
                    <Link to="/discoveries/usa-middle-east">
                      USA &amp; Middle East
                    </Link>
                    <Link to="/discoveries/life-issues">Life Issues</Link>
                  </div>
                </div>
              </li>
              {/*  */}
              <li className="nav-item">
                <NavLink exact to="/events" activeClassName="navlink-active">
                  Events
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact to="/store" activeClassName="navlink-active">
                  Store
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact to="/donate" activeClassName="navlink-active">
                  Donate
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export const Header = withRouter(WrappedHeader);
