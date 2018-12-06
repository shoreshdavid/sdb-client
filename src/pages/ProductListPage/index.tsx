import * as React from 'react';
import { Helmet } from 'react-helmet';

import { Image } from 'components/Image';

import { products } from './products';

export const ProductListPage = () => (
  <React.Fragment>
    <Helmet>
      <title>Products | Shoresh David Brandon</title>
    </Helmet>
    <div className="container-fluid padding-50">
      <div className="row">
        {products.map((product, i: number) => (
          <div key={i} className="col-lg-3">
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
                {product.hasAudio ? (
                  <audio
                    src="https://s3.amazonaws.com/images.shoreshdavidbrandon.com/extra/healing-cd-preview.mp3"
                    controls
                    style={{ width: '100%', margin: '20px 0' }}
                  />
                ) : null}
                <div className="card-footer">
                  <button className="btn btn-primary btn-block">
                    Purchase
                  </button>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </React.Fragment>
);
