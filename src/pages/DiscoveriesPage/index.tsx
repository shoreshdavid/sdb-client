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

export const DiscoveriesPage = () => {
  return (
    <React.Fragment>
      <Container fluid>
        <Row className="padding-50">
          <Col lg="3">
            <ListGroup>
              {discoveryTabs.map(tab => (
                <ListGroupItem
                  key={tab.id}
                  action
                  tag="a"
                  style={{ marginBottom: 10 }}
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
                  console.log(data);
                  return data.articles.map(article => (
                    <Col lg="4" key={article.slug}>
                      <Article article={article} />
                    </Col>
                  ));
                }}
              </Query>
            </Row>
          </Col>
        </Row>
      </Container>
      <EmailBanner />
    </React.Fragment>
  );
};
