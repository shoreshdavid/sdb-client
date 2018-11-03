import * as React from 'react';

const placeholder =
  'https://www.bristolgate.com/wp-content/uploads/2018/09/orionthemes-placeholder-image.png';

export const Image = props => {
  const { src, alt } = props;
  return (
    <img
      src={src}
      alt={alt}
      onError={(e: any) => (e.target.src = placeholder)}
      {...props}
    />
  );
};
