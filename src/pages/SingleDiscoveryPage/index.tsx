import Axios from 'axios';
// import { Error } from 'components/Error';
import { Loading } from 'components/Loading';
import { Part } from 'components/Part';
import * as React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { API_URL } from '../../constants';

export class SingleDiscoveryPage extends React.Component<any, any> {
  public state = {
    loading: true,
    error: null,
    discovery: {} as any,
  };

  public componentDidMount() {
    Axios.get(`${API_URL}/articles/${this.props.match.params.slug}`)
      .then(res => this.setState({ loading: false, discovery: res.data.data }))
      .catch(err =>
        this.setState({ loading: false, error: err.response.statusText }),
      );
  }

  public render() {
    const { discovery } = this.state;

    if (this.state.loading) {
      return <Loading />;
    }
    if (this.state.error) {
      return (
        <div>
          We are sorry. Something went wrong. Please refresh and try again.
          Server message: {this.state.error}
        </div>
      );
    }
    const renderParts = discovery.parts.length ? (
      discovery.parts.map(part => (
        <Part
          key={part._id}
          title={part.title}
          mediumLink={part.mediumLink}
          anchorLink={part.anchorLink}
          youtubeLink={part.youtubeLink}
        />
      ))
    ) : (
      <h1>No Parts...</h1>
    );
    return (
      <Container fluid className="service-container">
        <Row>
          <Col xs="12" sm="12" lg="4">
            <img src={this.state.discovery.featuredImage} alt="" />
            <h4
              style={{
                color: '#000',
                padding: '30px 0 10px 0',
                fontSize: 18,
              }}
            >
              {this.state.discovery.title}
            </h4>
          </Col>
          <Col xs="12" sm="10" lg="8">
            {renderParts}
          </Col>
        </Row>
      </Container>
    );
  }
}
