import { Error } from 'components/Error';
import { Loading } from 'components/Loading';
import gql from 'graphql-tag';
import * as React from 'react';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import { Button } from 'reactstrap';

const query = gql`
  {
    jewishes {
      id
      title
      description
      link
      featuredImage
    }
  }
`;

const JewishCard = ({ image, title, body, link }) => {
  const shrinkTitle = title.substring(0, 32) + '...';
  const shrinkBody = body.substring(0, 116) + '...';
  return (
    <div className="jewish-card center">
      <img src={image} alt={title} />
      <Link to={link}>
        <h3 className="jewish-card-title">{shrinkTitle}</h3>
      </Link>
      <p>{shrinkBody}</p>
      <Link to={link} target="_blank">
        <Button block color="primary">
          Read More
        </Button>
      </Link>
    </div>
  );
};

export const JewishPage = () => {
  return (
    <Container fluid className="padding-50">
      <Query query={query}>
        {({ loading, error, data }) => {
          if (loading) {
            return <Loading />;
          }
          if (error) {
            return <Error error={error} />;
          }

          const { jewishes } = data;
          return (
            <div className="jewish-page">
              <Row>
                {jewishes.map(jewish => (
                  <Col sm="12" lg="4" key={data.id}>
                    <JewishCard
                      image={jewish.featuredImage}
                      title={jewish.title}
                      body={jewish.description}
                      link={jewish.link}
                    />
                  </Col>
                ))}
              </Row>
            </div>
          );
        }}
      </Query>
    </Container>
  );
};
