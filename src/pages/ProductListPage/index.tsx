import { Error } from 'components/Error';
import { Loading } from 'components/Loading';
import { Product } from 'components/Product';
import * as React from 'react';
import { Fetch } from 'react-refetch-component';
import { Col, Container, Row } from 'reactstrap';
import { API_URL } from '../../constants';

export const ProductListPage = () => {
  return (
    <Container fluid className="padding-50">
      <Row>
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
              <Col lg="3" key={product.slug}>
                <Product product={product} />
              </Col>
            ));
          }}
        </Fetch>
      </Row>
    </Container>
  );
};
