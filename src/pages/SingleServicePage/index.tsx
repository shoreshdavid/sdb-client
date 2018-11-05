import Axios from 'axios';
import { Image } from 'components/Image';
import { Loading } from 'components/Loading';
import { Part } from 'components/Part';
import * as React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { API_URL } from '../../constants';

export class SingleServicePage extends React.Component<any, any> {
  public state = {
    loading: true,
    error: null,
    service: {} as any,
  };

  public componentDidMount() {
    Axios.get(`${API_URL}/services/${this.props.match.params.slug}`)
      .then(res => this.setState({ loading: false, service: res.data.data }))
      .catch(err =>
        this.setState({ loading: false, error: err.response.statusText }),
      );
  }

  public render() {
    const { service } = this.state;

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

    const renderParts = service.parts.length ? (
      service.parts.map(part => (
        <Part
          key={part._id}
          partNumber={part.partNumber}
          mediumLink={part.mediumLink}
          anchorLink={part.anchorLink}
          youtubeLink={part.youtubeLink}
        />
      ))
    ) : (
      <div>No Parts...</div>
    );
    return (
      <Container fluid className="service-container">
        <Row>
          <Col xs="12" sm="12" lg="4">
            <Image src={this.state.service.featuredImage} alt="" />
            <h4
              style={{
                color: '#000',
                padding: '30px 0 10px 0',
                fontSize: 18,
              }}
            >
              {this.state.service.title}
            </h4>
            <p style={{ fontSize: 14 }}>
              {this.state.service.description}
            </p>
          </Col>
          <Col xs="12" sm="10" lg="8">
            {renderParts}
          </Col>
        </Row>
      </Container>
    );
  }
}
