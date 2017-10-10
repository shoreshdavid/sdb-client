import React, { Component } from 'react';
import { Route, IndexRoute } from 'react-router';
import { Nav } from 'components/Nav';
import { Footer } from 'components/Footer';
import './normalize.css';
import './main.css';

export const App = props => {
  return (
    <div>
      <Nav />
        {props.children}
      <Footer />
    </div>
  );
}
