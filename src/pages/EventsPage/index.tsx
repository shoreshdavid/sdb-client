import * as React from 'react';
import Calendar from 'react-calendar';
import { Col, Container, Row } from 'reactstrap';

export class EventsPage extends React.Component<any, any> {
  public state = {
    date: new Date(),
  };
  public render() {
    return (
      <Container fluid className="events-page">
        <Row>
          <Col lg={{ size: 10, offset: 1 }}>
            <Calendar value={this.state.date} />
          </Col>
        </Row>
      </Container>
    );
  }
}
