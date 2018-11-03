import { Error } from 'components/Error';
import { Loading } from 'components/Loading';
import * as React from 'react';
import { Fetch } from 'react-refetch-component';
import { Col, Container, Row } from 'reactstrap';
import { Button } from 'reactstrap';
import { API_URL } from '../../constants';

const JewishCard = ({ image, title, link }) => {
  return (
    <div className="jewish-card center">
      <img src={image} alt={title} />
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

export const JewishPage = () => {
  return (
    <Container fluid className="padding-50">
      <div className="jewish-page">
        <Row>
          <Fetch url={`${API_URL}/jewish`} method="get" lifecycle="onMount">
            {({ loading, error, data }) => {
              if (loading) {
                return <Loading />;
              }
              if (error) {
                return <Error error={error} />;
              }

              return data.data.map(j => (
                <Col sm="12" lg="3" key={j._id}>
                  <JewishCard
                    image={j.featuredImage}
                    title={j.title}
                    link={j.link}
                  />
                </Col>
              ));
            }}
          </Fetch>
        </Row>
      </div>
    </Container>
  );
};
