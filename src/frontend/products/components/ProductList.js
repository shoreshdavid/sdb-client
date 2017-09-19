import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductListContainer from '../containers/ProductListContainer';
// import Pagination from '../../../shared/Pagination';

const ProductList = props => {
  return (
    <div className='container'>
      <ProductListContainer products={props.products} />
      {/* <div className='col-lg-12'>
        <div className='row text-center'>
          <Pagination />
        </div>
      </div> */}
    </div>
  );
}

export default ProductList;