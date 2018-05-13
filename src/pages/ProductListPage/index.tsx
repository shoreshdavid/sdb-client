import { Loading } from 'components/Loading';
import { Product } from 'components/Product';
import gql from 'graphql-tag';
import * as React from 'react';
import { Query } from 'react-apollo';

const ProductsQuery = gql`
  {
    products {
      id
      slug
      name
      price
      featuredImage
      storeLink
    }
  }
`;

export const ProductListPage = () => {
  return (
    <div className="container-fluid">
      <Query query={ProductsQuery}>
        {({ loading, error, data }) => {
          if (loading) {
            return <Loading />;
          }
          if (error) {
            return <div>Error</div>;
          }

          return data.products.map(product => {
            return <Product key={product.slug} product={product} />;
          });
        }}
      </Query>
    </div>
  );
};
