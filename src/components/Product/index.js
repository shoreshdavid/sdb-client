import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './main.css';

export const Product = ({ product }) => {
  return (
    <div className='col-md-3'>
      <div className='product-card'>
        <a href={product.storeLink} target='_blank'>
          <img src={product.featuredImage} />
          <div className='details'>
            <p className='title'>{product.name}</p>
            <p>${product.price}</p>
          </div>
        </a>
      </div>
    </div>
  );
}