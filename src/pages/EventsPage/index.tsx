/* tslint:disable */
import * as React from 'react';
import { Col, Container, Row } from 'reactstrap';

export class EventsPage extends React.Component<any, any> {
  // public state = {
  //   loading: true,
  //   error: null,
  //   events: [],
  //   alert: null,
  // };
  public render() {
    return (
      <Container fluid className="padding-50">
        <Row>
          <Col
            xs={12}
            md={10}
            xl={{ size: 6, offset: 3 }}
            className="ml-auto mr-auto"
          >
            <iframe
              src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=en.usa%23holiday%40group.v.calendar.google.com&amp;color=%23125A12&amp;ctz=America%2FNew_York"
              style={{ width: 800, height: 600 }}
              frameBorder="0"
              scrolling="no"
            />
          </Col>
        </Row>
      </Container>
    );
  }
}
