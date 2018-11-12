import * as React from 'react';

export const Error = ({ error }: any) => (
  <div>
    <div className="alert alert-danger fade show">Error: {error}</div>
  </div>
);
