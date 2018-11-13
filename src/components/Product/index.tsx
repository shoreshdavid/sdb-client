import * as React from 'react';

import { Image } from 'components/Image';

export const Product = ({ product }) => {
  return (
    <div className="card">
      <Image
        src={product.featuredImage}
        alt={product.name}
        className="lazyload"
        style={{ height: 400 }}
      />
      <a
        href={product.storeLink}
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: 'black' }}
      >
        <div className="card-body card-block">
          <h5 className="card-title">{product.name}</h5>
          <h6 className="card-subtitle">${product.price}</h6>
        </div>
        <div className="card-footer">
          <button className="btn btn-primary btn-block">Purchase</button>
        </div>
      </a>
    </div>
  );
};
