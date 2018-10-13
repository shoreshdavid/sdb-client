import Axios from 'axios';
import { Error } from 'components/Error';
import { Loading } from 'components/Loading';
import * as React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { Button } from 'reactstrap';
import { API_URL } from '../../constants';

const JewishCard = ({ image, title, link }) => {
  return (
    <div className="jewish-card center">
      <img
        src="https://s3.amazonaws.com/images.shoreshdavidbrandon.com/bg-image.svg"
        alt={title}
      />
      <div className="jewish-card__body">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <h3 className="jewish-card-title">{title}</h3>
        </a>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <Button block color="primary">
            Read More
          </Button>
        </a>
      </div>
    </div>
  );
};

export class JewishPage extends React.Component<any, any> {
  public state = {
    loading: true,
    error: null,
    jewish: [] as any,
  };
  public componentDidMount() {
    Axios.get(`${API_URL}/jewish`)
      .then(res => {
        this.setState({ loading: false, jewish: res.data.data });
      })
      .catch(err => {
        this.setState({ loading: false, error: err });
      });
  }
  public render() {
    if (this.state.loading) {
      return <Loading />;
    }
    if (this.state.error) {
      return <Error error={this.state.error} />;
    }
    if (!this.state.jewish.length) {
      return (
        <Container fluid className="padding-50">
          <Row>
            <Col lg="3">
              <h1>No Jewish items yet.</h1>
            </Col>
          </Row>
        </Container>
      );
    }
    return (
      <Container fluid className="padding-50">
        <div className="jewish-page">
          <Row>
            {this.state.jewish.map(j => (
              <Col sm="12" lg="3" key={j._id}>
                <JewishCard
                  image={j.featuredImage}
                  title={j.title}
                  link={j.link}
                />
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    );
  }
}
