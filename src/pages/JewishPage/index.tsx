import { Error } from 'components/Error';
import { Loading } from 'components/Loading';
import * as React from 'react';
import { Fetch } from 'react-refetch-component';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
  Col,
  Container,
  Row,
} from 'reactstrap';
import { API_URL } from '../../constants';

const JewishCard = ({ image, title, link }) => {
  return (
    <Card className="jewish-card">
      <CardImg src={image} alt={title} />
      <a href={link} target="_blank" rel="noopener noreferrer">
        <CardBody className="card-block">
          <CardTitle>{title}</CardTitle>
        </CardBody>
        <CardFooter>
          <Button color="primary" block>
            Purchase
          </Button>
        </CardFooter>
      </a>
    </Card>
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
