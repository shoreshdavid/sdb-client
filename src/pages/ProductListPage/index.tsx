import Axios from 'axios';
import { Error } from 'components/Error';
import { Loading } from 'components/Loading';
import { Product } from 'components/Product';
import * as React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { API_URL } from '../../constants';

export class ProductListPage extends React.Component<any, any> {
  public state = {
    loading: true,
    error: null,
    products: [] as any,
  };

  public componentDidMount() {
    Axios.get(`${API_URL}/products`)
      .then(res => {
        this.setState({
          loading: false,
          products: res.data.data,
        });
      })
      .catch(err => {
        this.setState({
          loading: false,
          error: err,
        });
      });
  }
  public render() {
    if (this.state.loading) {
      return <Loading />;
    }
    if (this.state.error) {
      return <Error error={this.state.error} />;
    }
    if (!this.state.products.length) {
      return (
        <Container fluid className="padding-50">
          <Row>
            <Col lg="3">
              <h1>No Products yet</h1>
            </Col>
          </Row>
        </Container>
      );
    }
    return (
      <Container fluid className="padding-50">
        <Row>
          {this.state.products.map(product => (
            <Col lg="3" key={product.slug}>
              <Product product={product} />
            </Col>
          ))};
        </Row>
      </Container>
    );
  }
}
