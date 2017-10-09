import React from 'react';
import { Nav } from './Nav';
import { Footer } from './Footer';

export const AppIndex = props => {
  return (
    <div>
      <Nav />
        {props.children}
      <Footer />
    </div>
  );
}