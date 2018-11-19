import Axios from 'axios';
import { Article } from 'components/Article';
import { Error } from 'components/Error';
import { Loading } from 'components/Loading';
import * as React from 'react';
import { API_URL } from '../../constants';

export class DiscoveriesPage extends React.Component<any, any> {
  public state = {
    loading: true,
    error: null,
    articles: [] as any,
    tabs: [] as any,
    category: 'evolution',
    page: 1,
    count: 0,
    size: 12,
  };

  public componentDidMount() {
    Axios.all([
      Axios.get(
        `${API_URL}/articles?category=${this.state.category}&page=${
          this.state.page
        }&size=${this.state.size}`,
      ),
      Axios.get(`${API_URL}/tabs/discoveries`),
    ])
      .then(
        Axios.spread((articleRes, tabRes) => {
          this.setState({
            loading: false,
            articles: articleRes.data.data,
            tabs: tabRes.data.data,
            count: articleRes.data.count,
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

  public toggleFilter = async category => {
    await this.setState({
      category,
      page: 1,
    });

    Axios.get(
      `${API_URL}/articles?category=${this.state.category}&page=${
        this.state.page
      }&size=${this.state.size}`,
    )
      .then(res => {
        this.setState({
          articles: res.data.data,
          count: res.data.count,
        });
      })
      .catch(error => {
        this.setState({
          error: error,
        });
      });
  }

  public handlePageRequest = () => {
    const { category, page, size } = this.state;
    Axios.get(
      `${API_URL}/articles?category=${category}&page=${page}&size=${size}`,
    )
      .then(res => {
        this.setState({
          loading: false,
          articles: res.data.data,
        });
      })
      .catch(err =>
        this.setState({
          loading: false,
          error: err.response.data.error,
        }),
      );
  }

  public goToPage = async (page: number) => {
    await this.setState({ page });
    this.handlePageRequest();
  }

  public handleLeftPage = async () => {
    if (this.state.page === 1) {
      return;
    }
    await this.setState(prevState => {
      return {
        page: prevState.page - 1,
      };
    });
    this.handlePageRequest();
  }

  public handleRightPage = async () => {
    if (this.state.page > Math.ceil(this.state.count / this.state.size) - 1) {
      return;
    }
    await this.setState(prevState => {
      return {
        page: prevState.page + 1,
      };
    });
    this.handlePageRequest();
  }

  public render() {
    if (this.state.loading) {
      return <Loading />;
    }
    if (this.state.error) {
      return <Error error={this.state.error} />;
    }

    const renderTabs = this.state.tabs.map((tab: any, index: number) => (
      <li
        className={`list-group-item-action list-group-item ${
          tab.slug === this.state.category ? 'active' : ''
        }`}
        key={index}
        style={{
          marginBottom: 10,
          cursor: 'pointer',
          fontWeight: 700,
        }}
        onClick={() => this.toggleFilter(tab.slug)}
      >
        {tab.label}
      </li>
    ));

    const { count, size, page, articles } = this.state;
    const range = (from, to, step = 1) => {
      let i = from;
      const stack = [] as any;

      while (i <= to) {
        stack.push(i);
        i += step;
      }

      return stack;
    };

    return (
      <div className="container-fluid padding-50">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-lg-4 col-xl-3">
            <ul className="list-group">{renderTabs}</ul>
          </div>
          <div className="col">
            <div className="row">
              {articles.length ? (
                articles.map(article => (
                  <div
                    className="col-xs-12 col-sm-12 col-md-4 col-lg-3 col-xl-4"
                    key={article.slug}
                  >
                    <Article article={article} />
                  </div>
                ))
              ) : (
                <div className="padding-50">
                  No results in {this.state.category}
                </div>
              )}
            </div>
            <div
              className="row"
              style={{
                textAlign: 'center',
                margin: '0 auto',
                justifyContent: 'center',
              }}
            >
              <ul className="pagination">
                <li
                  className={
                    this.state.page === 1 ? 'page-item disabled' : 'page-item'
                  }
                  onClick={this.handleLeftPage}
                >
                  <span className="page-link">Previous</span>
                </li>
                {range(1, Math.ceil(count / size)).map(
                  (selectedPage: number, i) => (
                    <li
                      className={`page-item ${
                        page === selectedPage ? 'active' : null
                      }`}
                      key={i}
                    >
                      <span
                        className="page-link"
                        onClick={() => this.goToPage(selectedPage)}
                      >
                        {selectedPage}
                      </span>
                    </li>
                  ),
                )}
                <li
                  className={
                    page > Math.ceil(count / size) - 1
                      ? 'page-item disabled'
                      : 'page-item'
                  }
                  onClick={this.handleRightPage}
                >
                  <span className="page-link">Next</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
