import * as moment from 'moment';
import * as React from 'react';
import BigCalendar from 'react-big-calendar';
import { Col, Container, Row } from 'reactstrap';
import { events } from './data';
import './styles.scss';

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));

export class EventsPage extends React.Component {
  public state = {
    events: events,
    alert: null,
  };
  public selectedEvent = event => {
    alert(event.title);
  }
  public eventColors = (event: any, start: any, end: any, isSelected: any) => {
    let backgroundColor = 'event-';
    event.color
      ? (backgroundColor = backgroundColor + event.color)
      : (backgroundColor = backgroundColor + 'default');
    return {
      className: backgroundColor,
    };
  }
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
              <BigCalendar
                style={{ height: '100vh' }}
                selectable
                events={this.state.events}
                defaultView="month"
                scrollToTime={new Date(1970, 1, 1, 6)}
                defaultDate={new Date()}
                // onSelectEvent={event => this.selectedEvent(event)}
                // onSelectSlot={slotInfo => this.addNewEventAlert(slotInfo)}
                eventPropGetter={this.eventColors}
              />
            </Col>
          </Row>
      </Container>
    );
  }
}
