import * as React from 'react';
import { Helmet } from 'react-helmet';
import Parser from 'react-html-parser';

import { Image } from '../../components/Image';

import { products } from './products';

const cards = require('../../assets/img/cards.png');

export const ProductListPage = () => (
  <React.Fragment>
    <Helmet>
      <title>Products | Shoresh David Brandon</title>
    </Helmet>
    <div className="container-fluid padding-50">
      <div style={{ textAlign: 'center' }}>
        <h3 style={{ fontSize: '2.25rem', fontWeight: 700 }}>
          Free Shipping On All Items
        </h3>
        <img src={cards} alt="credit card icons" />
      </div>
      <div className="row">
        {products.map((product, i: number) => (
          <div
            key={i}
            className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4"
          >
            <div
              className="card"
              style={{ height: 'auto', textAlign: 'center' }}
            >
              <Image
                src={product.featuredImage}
                alt={product.name}
                className="lazyload"
                style={{ height: 400 }}
              />
              <div className="card-body card-block">
                <h5 className="card-title">{product.name}</h5>
                <h6 className="card-subtitle">${product.price}</h6>
                <div style={{ margin: '1rem 0' }}>
                  {product.links.length > 0 ? (
                    product.links.map((link: any, index: number) => (
                      <a
                        key={index}
                        href={link.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: 'black' }}
                      >
                        <button
                          className="btn btn-primary btn-block"
                          style={{ marginBottom: 16 }}
                        >
                          {link.text}
                        </button>
                      </a>
                    ))
                  ) : (
                    <a
                      href={product.storeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: 'black' }}
                    >
                      <button className="btn btn-primary btn-block">
                        {product.buttonText}
                      </button>
                    </a>
                  )}
                </div>
                {product.hasAudio ? (
                  <div style={{ padding: 15 }}>
                    <audio
                      src="https://s3.amazonaws.com/images.shoreshdavidbrandon.com/extra/healing-cd-preview.mp3"
                      controls
                      style={{ width: '100%' }}
                    />
                  </div>
                ) : null}
                <div>{Parser(product.description)}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </React.Fragment>
);
