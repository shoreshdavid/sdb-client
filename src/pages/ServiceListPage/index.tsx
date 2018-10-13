import Axios from 'axios';
// import { Error } from 'components/Error';
import { Loading } from 'components/Loading';
import { Service } from 'components/Service';
import * as React from 'react';
import { Col, Container, ListGroup, ListGroupItem, Row } from 'reactstrap';
import { API_URL } from '../../constants';

export class ServiceListPage extends React.Component<any, any> {
  public state = {
    loading: true,
    error: null,
    services: [] as any,
    tabs: [] as any,
    category: 'rabbi-don',
  };

  public componentDidMount() {
    Axios.all([
      Axios.get(`${API_URL}/services`),
      Axios.get(`${API_URL}/tabs/services`),
    ])
      .then(
        Axios.spread((serviceRes, tabRes) => {
          this.setState({
            loading: false,
            services: serviceRes.data.data,
            tabs: tabRes.data.data,
          });
        }),
      )
      .catch(err =>
        this.setState({
          loading: false,
          error: err.response.data.error,
        }),
      );
  }

  public toggleFilter = category => {
    this.setState({
      category: category,
    });
  }

  public render() {
    const renderTabs = this.state.tabs.length ? (
      this.state.tabs.map(tab => {
        return (
          <ListGroupItem
            key={tab._id}
            action
            tag="button"
            style={{
              marginBottom: 10,
              cursor: 'pointer',
              fontWeight: 700,
            }}
            active={tab.slug === this.state.category}
            onClick={() => this.toggleFilter(tab.slug)}
          >
            {tab.label}
          </ListGroupItem>
        );
      })
    ) : (
      <div>No results here</div>
    );

    // Services Filter & Map

    const filteredService = this.state.services.filter(s => {
      return s.category.toLowerCase() === this.state.category.toLowerCase();
    });

    const renderServices = filteredService.length ? (
      filteredService.map(service => (
        <Col lg="4" xl="4" key={service.slug}>
          <Service service={service} />
        </Col>
      ))
    ) : (
      <div>No results in {this.state.category}</div>
    );

    if (this.state.loading) {
      return <Loading />;
    }
    if (this.state.error) {
      return <div>{JSON.stringify(this.state.error)}</div>;
    }
    // if (!data) {
    //   return <h1>No data..</h1>;
    // }
    return (
      <Container fluid className="padding-50">
        <Row>
          <Col xs="12" sm="12" md="4" lg="3" xl="3">
            <ListGroup>{renderTabs}</ListGroup>
          </Col>
          <Col>
            <Row>{renderServices}</Row>
          </Col>
        </Row>
      </Container>
    );
  }
}
