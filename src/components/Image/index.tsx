import * as React from 'react';

const placeholder = require('../../assets/img/image-not-found.jpg');

export const Image = props => {
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
