import * as React from 'react';
import { Alert } from 'reactstrap';

interface IProps {
  error: any;
}

export const Error = ({ error }: IProps) => (
  <div>
    <Alert color="danger">Error: {error}</Alert>
  </div>
);
