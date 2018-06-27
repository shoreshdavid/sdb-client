import * as React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import { Button } from 'reactstrap';
import { jewishData } from './data';

const JewishCard = ({ image, title, body, link }) => {
  const shrinkBody = body.substring(0, 156) + '...';
  return (
    <div className="jewish-card center">
      <img src={image} alt={title} />
      <Link to={link}>
        <h3 className="jewish-card-title">{title}</h3>
      </Link>
      <p>{shrinkBody}</p>
      <Link to={link} target="_blank">
        <Button block>Read More</Button>
      </Link>
    </div>
  );
};

export const JewishPage = () => {
  return (
    <Container fluid className="padding-50">
      <div className="jewish-page">
        <Row>
          {jewishData.map(data => (
            <Col sm="12" lg="4">
              <JewishCard
                key={data.id}
                image={data.image}
                title={data.title}
                body={data.body}
                link={data.link}
              />
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
};
