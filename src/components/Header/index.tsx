import { Image } from 'components/Image';
import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';

import './header.scss';

const headerLogo = require('../../assets/img/header-logo.png');
const smallLogo = require('../../assets/img/sdb-logo-md.png');

export class Header extends React.Component<any, any> {
  public state = {
    isOpen: false,
  };

  public toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  public render() {
    return (
      <div className="sdb-nav">
        <nav className="navbar navbar-expand-md navbar-light">
          <Link to="/">
            {window.innerWidth < 600 ? (
              <Image
                src={smallLogo}
                style={{ width: 50, height: 50 }}
                alt="Shoresh David Brandon logo"
                className="lazyload"
              />
            ) : (
              <Image
                src={headerLogo}
                alt="Shoresh David Brandon logo"
                className="lazyload"
              />
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
            <ul className="ml-auto navbar-nav">
              <li className="nav-item">
                <NavLink exact to="/" activeClassName="navlink-active">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/services" activeClassName="navlink-active">
                  Teachings
                </NavLink>
              </li>
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
              <li className="nav-item">
                <NavLink to="/discoveries" activeClassName="navlink-active">
                  Discoveries
                </NavLink>
              </li>
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
                  Donate <span className="badge badge-danger">PLEASE</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
