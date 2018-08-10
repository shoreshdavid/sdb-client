import { Article } from 'components/Article';
import { Error } from 'components/Error';
import { Loading } from 'components/Loading';
import gql from 'graphql-tag';
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
    tabs {
      id
      label
      slug
      page
    }
  }
`;

export class DiscoveriesPage extends React.Component<any, any> {
  public state = {
    category: 'witness-real-stories',
  };
  public toggleFilter = category => {
    this.setState({
      category: category,
    });
  }
  public render() {
    return (
      <Query query={query}>
        {({ loading, error, data }) => {
          if (loading) {
            return <Loading />;
          }
          if (error) {
            return <Error error={error} />;
          }

          // Tabs Filter/Map

          const filteredTabs = data.tabs.filter(tab => {
            return tab.page.toLowerCase() === 'discoveries';
          });
          const renderTabs = filteredTabs.length ? (
            filteredTabs.map(tab => {
              console.log('skhbkdsbdskbskbskbsbdbk: ', tab);
              return (
                <ListGroupItem
                  key={tab.id}
                  action
                  tag="button"
                  style={{
                    marginBottom: 10,
                    cursor: 'pointer',
                    fontWeight: 700,
                  }}
                  active={this.state.category === tab.slug}
                  onClick={() => this.toggleFilter(tab.slug)}
                >
                  {tab.label}
                </ListGroupItem>
              );
            })
          ) : (
            <div>No results here</div>
          );

          // Articles Filter/Map

          const filteredArticles = data.articles.filter(a => {
            return (
              a.category.toLowerCase() === this.state.category.toLowerCase()
            );
          });

          const renderArticles = filteredArticles.length ? (
            filteredArticles.map(article => (
              <Col xs="12" sm="12" md="4" lg="3" xl="4" key={article.slug}>
                <Article article={article} />
              </Col>
            ))
          ) : (
            <div>No results in {this.state.category}</div>
          );

          return (
            <Container fluid>
              <Row className="padding-50">
                <Col xs="12" sm="12" lg="4" xl="3">
                  <ListGroup>{renderTabs}</ListGroup>
                </Col>
                <Col>
                  <Row>{renderArticles}</Row>
                </Col>
              </Row>
            </Container>
          );
        }}
      </Query>
    );
  }
}
