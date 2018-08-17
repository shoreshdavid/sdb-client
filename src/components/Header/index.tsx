// import * as moment from 'moment';
import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  Badge,
  Collapse,
  Nav,
  Navbar,
  NavbarToggler,
  NavItem,
} from 'reactstrap';

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
    // const today = moment();
    // const otherDate = moment().isoWeekday(5);
    // const isToday = today.toString() === otherDate.toString();

    // const renderStreamBadge = isToday ? (
    //   <Badge style={{ backgroundColor: '#aa4ee0' }}>LIVE NOW!</Badge>
    // ) : null;

    return (
      <div className="sdb-nav">
        <Navbar light expand="md">
          <Link to="/">
            <img
              src="http://tikvaproductions.com/wp-content/uploads/2018/02/page-1-tree.png"
              alt="Shoresh David Brandon logo"
            />
          </Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink exact to="/" activeClassName="navlink-active">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink exact to="/services" activeClassName="navlink-active">
                  Teachings
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink exact to="/live" activeClassName="navlink-active">
                  Streaming
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink exact to="/jewish" activeClassName="navlink-active">
                  Jewish
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  exact
                  to="/discoveries"
                  activeClassName="navlink-active"
                >
                  Discoveries
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink exact to="/events" activeClassName="navlink-active">
                  Events
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink exact to="/store" activeClassName="navlink-active">
                  Store
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink exact to="/donate" activeClassName="navlink-active">
                  Donate <Badge color="danger">PLEASE</Badge>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
