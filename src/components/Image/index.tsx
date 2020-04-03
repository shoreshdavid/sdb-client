import * as React from 'react';

import placeholder from '../../assets/img/image-not-found.jpg';

interface Props {
  src: string;
  alt?: string;
  className?: string;
  style?: any;
}

export const Image = (props: Props) => {
  const { src, alt } = props;
  return (
    <img
      data-src={src}
      alt={alt}
      onError={(e: any) => (e.target.src = placeholder)}
      {...props}
    />
  );
};
