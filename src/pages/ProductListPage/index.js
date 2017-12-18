import React from 'react';
import ProductList from 'containers/ProductList';
import { Product } from 'components/Product';
import { Loading } from 'shared/Loading';

export const ProductListPage = () => {
  return (
    <div className='container-fluid'>
      <ProductList
        render={( products ) => {
          if (!products) { return <Loading /> }

          return products.map((node) => {
            return <Product key={node._id} product={node} />
          })
        }}
      />
    </div>
  );
}