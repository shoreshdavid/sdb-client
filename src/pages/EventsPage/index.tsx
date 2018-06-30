import * as React from 'react';
import Calendar from 'react-calendar';
import { Col, Container, Row } from 'reactstrap';

export const EventsPage = () => {
  return (
    <Container fluid className="events-page">
      <Row>
        <Col lg={{ size: 8, offset: 2 }}>
          <Calendar />
        </Col>
      </Row>
    </Container>
  );
};
