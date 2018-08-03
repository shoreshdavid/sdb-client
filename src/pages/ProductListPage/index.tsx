import { Error } from 'components/Error';
import { Loading } from 'components/Loading';
import { Product } from 'components/Product';
import gql from 'graphql-tag';
import * as React from 'react';
import { Query } from 'react-apollo';
import { Col, Container } from 'reactstrap';

const ProductsQuery = gql`
  {
    products {
      id
      slug
      name
      price
      featuredImage
      storeLink
      description
    }
  }
`;

export const ProductListPage = () => {
  return (
    <React.Fragment>
      <Container fluid>
        <div className="padding-50">
          <Query query={ProductsQuery}>
            {({ loading, error, data }) => {
              if (loading) {
                return <Loading />;
              }
              if (error) {
                return <Error error={error} />;
              }

              return data.products.map(product => (
                <Col lg="3" key={product.slug}>
                  <Product product={product} />
                </Col>
              ));
            }}
          </Query>
        </div>
      </Container>
    </React.Fragment>
  );
};
