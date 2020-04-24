import * as React from 'react';
import Helmet from 'react-helmet';

interface Props {
  title: string;
  children: React.ReactNode;
}

// Add:

// Head Elements (meta, etc)
// Layout (NavBar, etc)

export const Page = ({ title, children }: Props) => {
  return (
    <React.Fragment>
      <Helmet>
        <title>{title} | Shoresh David Brandon</title>
      </Helmet>
      {children}
    </React.Fragment>
  );
};
