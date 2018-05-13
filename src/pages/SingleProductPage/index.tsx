import { Loading } from 'components/Loading';
import gql from 'graphql-tag';
import * as React from 'react';
import { Query } from 'react-apollo';

const query = gql`
  query product($slug: String!) {
    product(where: { slug: $slug }) {
      id
    }
  }
`;

export const SingleProductPage = ({ match }) => {
  return (
    <Query query={query} variables={{ slug: match.params.slug }}>
      {({ loading, error, data }) => {
        const { product } = data;
        if (loading) {
          return <Loading />;
        }
        if (error) {
          return <div>Error</div>;
        }

        return (
          <React.Fragment>
            <div className="gap-md" />
            <div className="row">
              <div className="col-md-4">
                <img src={product.featuredImage} alt={product.name} />
              </div>
              <div className="col-lg-6">
                <div className="product-meta">
                  <h1>{product.name}</h1>
                  <p>${product.price}</p>
                  <i className="fa fa-heart-o fa-lg" />
                </div>
              </div>
            </div>
            <div className="row center-sm">
              <div className="col-sm-10">
                <div className="box">
                  <div className="product-details">
                    <div className="product-content" />
                  </div>
                </div>
              </div>
            </div>
          </React.Fragment>
        );
      }}
    </Query>
  );
};
