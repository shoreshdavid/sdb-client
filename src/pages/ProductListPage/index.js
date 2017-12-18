import React from 'react';
import ProductList from 'containers/ProductList';
import { Product } from 'components/Product';

export const ProductListPage = () => {
  return (
    <div className='container-fluid'>
      <ProductList
        render={( products ) => {
          if (!products) { return <h1>Loading...</h1> }

          return products.map((node) => {
            return <Product key={node._id} product={node} />
          })
        }}
      />
    </div>
  );
}