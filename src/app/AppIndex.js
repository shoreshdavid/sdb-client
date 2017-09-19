import React from 'react';
import Nav from './Nav';
import Footer from './Footer';

const AppIndex = props => {
  return (
    <div>
      <Nav />
      {props.children}
    </div>
  );
}

export default AppIndex;