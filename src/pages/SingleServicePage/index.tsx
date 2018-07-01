import { EmailBanner } from 'components/EmailBanner';
import { Error } from 'components/Error';
import { Loading } from 'components/Loading';
import gql from 'graphql-tag';
import * as React from 'react';
import { Query } from 'react-apollo';
// import ReactHtmlParser from 'react-html-parser';
// import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';

const query = gql`
  query service($slug: String!) {
    service(where: { slug: $slug }) {
      title
      category
      content
      videoUri
      featuredImage
    }
  }
`;

export const SingleServicePage = ({ match }) => (
  <React.Fragment>
    <Container fluid className="service-container">
      <Query query={query} variables={{ slug: match.params.slug }}>
        {({ loading, error, data }) => {
          if (loading) {
            return <Loading />;
          }
          if (error) {
            return <Error error={error} />;
          }

          const { service } = data;

          return (
            <Row>
              <Col xs="12" sm="12" lg="4">
                <img src={service.featuredImage} alt="" />
                <h4
                  style={{
                    color: '#000',
                    padding: '30px 0 10px 0',
                    fontSize: 18,
                  }}
                >
                  {service.title}
                </h4>
                <p style={{ fontSize: 14 }}>
                  Last night's amazing worship service. Check it out!
                </p>
                {/* <p>{service.description}</p> */}
              </Col>
              <Col xs="12" sm="10" lg="8">
                <div className="series-item">
                  <div className="series-item-detail">
                    <div className="series-item-title">{service.title}</div>
                    <div className="series-item-links">
                      <div>
                        <i className="fa fa-video" />
                        <i className="fa fa-microphone" />
                        <i className="fa fa-receipt" />
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          );
        }}
      </Query>
    </Container>
    <EmailBanner />
  </React.Fragment>
);
