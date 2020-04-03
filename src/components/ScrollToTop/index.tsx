import * as React from 'react';
import { useLocation } from 'react-router-dom';

interface Props {
  children: React.ReactNode;
}

export const ScrollToTop = ({ children }: Props) => {
  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  },              [location]);

  return children;
};
