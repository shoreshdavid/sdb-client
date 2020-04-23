import * as React from 'react';
import { Link } from 'react-router-dom';
import { Footer } from '~components/Footer';
import { Header } from '~components/Header';

interface ErrorProps {
  error: string | null | undefined;
}

export const Error = ({ error }: ErrorProps) => (
  <>
    <Header />
    <div
      style={{
        width: '100%',
        height: '75vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <h1>Uh-oh</h1>
      <p>
        Sorry about that! Please try again later or go <Link to="/">home</Link>
      </p>
      <p>
        Here's the error message from our server:{' '}
        <span style={{ fontWeight: 700 }}>{error}</span>
      </p>
    </div>
    <Footer />
  </>
);
