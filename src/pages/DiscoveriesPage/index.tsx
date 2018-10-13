import Axios from 'axios';
import { Article } from 'components/Article';
import { Error } from 'components/Error';
import { Loading } from 'components/Loading';
import * as React from 'react';
import { Col, Container, ListGroup, ListGroupItem, Row } from 'reactstrap';
import { API_URL } from '../../constants';

export class DiscoveriesPage extends React.Component<any, any> {
  public state = {
    loading: true,
    error: null,
    articles: [] as any,
    tabs: [] as any,
    category: 'witness-real-stories',
  };

  public componentDidMount() {
    Axios.all([
      Axios.get(`${API_URL}/articles`),
      Axios.get(`${API_URL}/tabs/discoveries`),
    ])
      .then(
        Axios.spread((articleRes, tabRes) => {
          this.setState({
            loading: false,
            articles: articleRes.data.data,
            tabs: tabRes.data.data,
          });
        }),
      )
      .catch(err => {
        this.setState({
          loading: false,
          error: err,
        });
      });
  }

  public toggleFilter = category => {
    this.setState({
      category: category,
    });
  }

  public render() {
    if (this.state.loading) {
      return <Loading />;
    }
    if (this.state.error) {
      return <Error error={this.state.error} />;
    }

    const renderTabs = this.state.tabs.map(tab => (
      <ListGroupItem
        key={tab._id}
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
    ));

    const filteredArticles = this.state.articles.filter(
      a => a.category.toLowerCase() === this.state.category.toLowerCase(),
    );

    const renderArticles = filteredArticles.length ? (
      filteredArticles.map(article => (
        <Col xs="12" sm="12" md="4" lg="3" xl="4" key={article.slug}>
          <Article article={article} />
        </Col>
      ))
    ) : (
      <div className="padding-50">No results in {this.state.category}</div>
    );

    return (
      <Container fluid className="padding-50">
        <Row>
          <Col xs="12" sm="12" lg="4" xl="3">
            <ListGroup>{renderTabs}</ListGroup>
          </Col>
          <Col>
            <Row>{renderArticles}</Row>
          </Col>
        </Row>
      </Container>
    );
  }
}
