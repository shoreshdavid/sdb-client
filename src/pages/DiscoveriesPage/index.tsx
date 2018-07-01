import { Article } from 'components/Article';
import { EmailBanner } from 'components/EmailBanner';
import { Error } from 'components/Error';
import { Loading } from 'components/Loading';
import gql from 'graphql-tag';
import { discoveryTabs } from 'pages/DiscoveriesPage/tabs';
import * as React from 'react';
import { Query } from 'react-apollo';
import { Col, Container, ListGroup, ListGroupItem, Row } from 'reactstrap';

const query = gql`
  {
    articles {
      title
      slug
      featuredImage
      category
    }
  }
`;

export class DiscoveriesPage extends React.Component<any, any> {
  public state = {
    category: 'usa-jerusalem-and-president-trump',
  };
  public toggleFilter = category => {
    this.setState({
      category: category,
    });
  }
  public render() {
    return (
      <React.Fragment>
        <Container fluid>
          <Row className="padding-50">
            <Col lg="3">
              <ListGroup>
                {discoveryTabs.map(tab => (
                  <ListGroupItem
                    key={tab.category}
                    action
                    tag="button"
                    style={{ marginBottom: 10 }}
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

                    const filteredArticles = data.articles.filter(a => {
                      return (
                        a.category.toLowerCase() === this.state.category.toLowerCase()
                      );
                    });

                    return filteredArticles.length ? (
                      filteredArticles.map(article => (
                        <Col lg="4" key={article.slug}>
                          <Article article={article} />
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
