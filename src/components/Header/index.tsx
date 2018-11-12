import { Image } from 'components/Image';
import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';

import './header.scss';

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
            <Image
              src="https://s3.amazonaws.com/images.shoreshdavidbrandon.com/header-logo.png"
              alt="Shoresh David Brandon logo"
            />
          </Link>
          {/* <button type="button" onClick={this.toggle}></button> */}
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
              <li className="nav-item">
                <NavLink exact to="/services" activeClassName="navlink-active">
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
                <NavLink
                  exact
                  to="/discoveries"
                  activeClassName="navlink-active"
                >
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
