import * as React from 'react';
import { Fetch } from 'react-refetch-component';

import { Error } from 'components/Error';
import { Loading } from 'components/Loading';
import { Product } from 'components/Product';

import { API_URL } from '../../constants';

export const ProductListPage = () => {
  return (
    <div className="container-fluid padding-50">
      <div className="row">
        <Fetch url={`${API_URL}/products`} method="get" lifecycle="onMount">
          {({ loading, error, data }) => {
            if (loading) {
              return <Loading />;
            }
            if (error) {
              return <Error error={error} />;
            }

            if (!data.data.length) {
              return <div>No products yet.</div>;
            }

            return data.data.map(product => (
              <div className="col-lg-3" key={product.slug}>
                <Product product={product} />
              </div>
            ));
          }}
        </Fetch>
      </div>
    </div>
  );
};
