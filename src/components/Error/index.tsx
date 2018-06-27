import * as React from 'react';

interface IProps {
  error: Object;
}

export const Error = ({ error }: IProps) => {
  return (
    <div>
      Error: <span style={{ color: 'red' }}>{error}</span>
    </div>
  );
};
