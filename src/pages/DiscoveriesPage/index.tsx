import Axios from 'axios';
import * as React from 'react';
import { Helmet } from 'react-helmet';

import { Card } from 'components/Card';
import { Error } from 'components/Error';
import { Loading } from 'components/Loading';

import { Link } from 'react-router-dom';
import { API_URL } from '../../constants';

export class DiscoveriesPage extends React.Component<any, any> {
  public state = {
    loading: true,
    error: null,
    articles: [] as any,
    tabs: [] as any,
    category: 'usa-middle-east',
    page: 1,
    count: 0,
    size: 12,
  };

  public componentDidMount() {
    const { size, page } = this.state;
    const { category } = this.props.match.params;
    Axios.all([
      Axios.get(
        `${API_URL}/articles?category=${category}&page=${page}&size=${size}`,
      ),
      Axios.get(`${API_URL}/tabs?pageType=Discoveries`),
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
      .catch((error: any) => {
        this.setState({
          loading: false,
          error: error.response.data.message,
        });
      });
  }

  public async componentDidUpdate(prevProps: any) {
    if (prevProps.match.params.category !== this.props.match.params.category) {
      await this.setState({ page: 1 });
      this.handlePageRequest();
    }
  }

  public handlePageRequest = async () => {
    const { page, size } = this.state;
    const { category } = this.props.match.params;
    try {
      const res = await Axios.get(
        `${API_URL}/articles?category=${category}&page=${page}&size=${size}`,
      );
      this.setState({
        loading: false,
        articles: res.data.data,
        count: res.data.count,
      });
      window.scrollTo(0, 0);
    } catch (error) {
      this.setState({
        loading: false,
        error: error.response.data.error,
      });
    }
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
      <Link key={index} to={`/discoveries/${tab.slug}`}>
        <li
          className={`list-group-item-action list-group-item ${
            tab.slug === this.props.match.params.category ? 'active' : ''
          }`}
          key={index}
          style={{
            marginBottom: 10,
            cursor: 'pointer',
            fontWeight: 700,
          }}
        >
          {tab.label}
        </li>
      </Link>
    ));

    const { count, size, page, articles } = this.state;
    const range = (from: number, to: number, step = 1) => {
      let i = from;
      const stack = [] as any;

      while (i <= to) {
        stack.push(i);
        i += step;
      }

      return stack;
    };

    return (
      <React.Fragment>
        <Helmet>
          <title>SDB | Biblical Based Articles & Discoveries</title>
        </Helmet>
        <div className="container-fluid padding-50">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
              <ul className="list-group">{renderTabs}</ul>
            </div>
            <div className="col">
              <div className="row">
                {articles.length ? (
                  articles.map(
                    (
                      {
                        title,
                        featuredImage,
                        slug,
                        link,
                        color,
                        category,
                      }: any,
                      i: number,
                    ) => (
                      <div
                        className="col-sm-12 col-md-6 col-lg-6 col-xl-4"
                        key={i}
                      >
                        <Card
                          title={title}
                          featuredImage={featuredImage}
                          category={category}
                          slug={slug}
                          link={link}
                          color={color}
                          type="discoveries"
                        />
                      </div>
                    ),
                  )
                ) : (
                  <div className="padding-50">
                    <p>
                      No discoveries in {this.state.category}. Please choose
                      another category!
                    </p>
                  </div>
                )}
              </div>
              {count > 12 ? (
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
                        this.state.page === 1
                          ? 'page-item disabled'
                          : 'page-item'
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
              ) : null}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
