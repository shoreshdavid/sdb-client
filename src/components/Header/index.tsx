import * as React from 'react';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="clearfix">
      <div className="header-links">
        <NavLink exact to="/" activeClassName="navlink-active">
          Home
        </NavLink>
        <NavLink exact to="/services" activeClassName="navlink-active">
          Teachings
        </NavLink>
        <NavLink exact to="/live" activeClassName="navlink-active">
          Streaming
        </NavLink>
        <NavLink exact to="/jewish" activeClassName="navlink-active">
          Jewish
        </NavLink>
        <NavLink exact to="/discoveries" activeClassName="navlink-active">
          Discoveries
        </NavLink>
        <NavLink exact to="/events" activeClassName="navlink-active">
          Events
        </NavLink>
        <NavLink exact to="/store" activeClassName="navlink-active">
          Store
        </NavLink>
        <NavLink exact to="/donate" activeClassName="navlink-active">
          Donate
        </NavLink>
      </div>
    </header>
  );
};
