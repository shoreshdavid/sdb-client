import { EmailBanner } from 'components/EmailBanner';
import { Error } from 'components/Error';
import { Loading } from 'components/Loading';
import { Service } from 'components/Service';
import gql from 'graphql-tag';
import { tabData } from 'pages/ServiceListPage/tabs';
import * as React from 'react';
import { Query } from 'react-apollo';
// import { Link } from 'react-router-dom';
import { Col, Container, ListGroup, ListGroupItem, Row } from 'reactstrap';

const query = gql`
  {
    services {
      title
      slug
      featuredImage
      videoUri
      content
      createdAt
      category
    }
  }
`;

export class ServiceListPage extends React.Component<any, any> {
  public state = {
    category: 'weekly-teachings',
  };

  public toggleFilter = category => {
    this.setState({
      category: category,
    });
  }
  public render() {
    console.log(this.state.category);
    return (
      <React.Fragment>
        <Container fluid>
          <Row className="padding-50">
            <Col lg="3">
              <ListGroup>
                {tabData.map(tab => (
                  <ListGroupItem
                    key={tab.category}
                    action
                    tag="button"
                    style={{ marginBottom: 10, cursor: 'pointer' }}
                    active={this.state.category === tab.category}
                    onClick={() => this.toggleFilter(tab.category)}
                  >
                    {tab.title}
                  </ListGroupItem>
                ))}
              </ListGroup>
            </Col>
            <Col>
              <Row>
                <Query query={query}>
                  {({ loading, error, data }) => {
                    if (loading) {
                      return <Loading />;
                    }
                    if (error) {
                      return <Error error={error} />;
                    }

                    const filteredService = data.services.filter(s => {
                      return (
                        s.category.toLowerCase() ===
                        this.state.category.toLowerCase()
                      );
                    });

                    return filteredService.length ? (
                      filteredService.map(service => (
                          <Col lg="4" key={service.slug}>
                            <Service service={service} />
                          </Col>
                        ))
                    ) : (
                      <div>No results in {this.state.category}</div>
                    );
                  }}
                </Query>
              </Row>
            </Col>
          </Row>
        </Container>
        <EmailBanner />
      </React.Fragment>
    );
  }
}
