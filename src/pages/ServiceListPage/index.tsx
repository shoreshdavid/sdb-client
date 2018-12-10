import Axios from 'axios';
import * as React from 'react';
import { Helmet } from 'react-helmet';

import { Card } from 'components/Card';
import { Error } from 'components/Error';
import { Loading } from 'components/Loading';

import { Link } from 'react-router-dom';
import { API_URL } from '../../constants';

export class ServiceListPage extends React.Component<any, any> {
  public state = {
    loading: true,
    error: null,
    services: [] as any,
    tabs: [] as any,
    category: 'rabbi-don',

    page: 1,
    count: 0,
    size: 12,
  };

  public componentDidMount() {
    const { size, page } = this.state;
    const { category } = this.props.match.params;
    Axios.all([
      Axios.get(
        `${API_URL}/services?category=${category}&page=${page}&size=${size}`,
      ),
      Axios.get(`${API_URL}/tabs?pageType=Teachings`),
    ])
      .then(
        Axios.spread((serviceRes, tabRes) => {
          this.setState({
            loading: false,
            services: serviceRes.data.data,
            count: serviceRes.data.count,
            tabs: tabRes.data.data,
          });
        }),
      )
      .catch((error: any) =>
        this.setState({
          loading: false,
          error: error.response.data.message,
        }),
      );
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
      const res: any = await Axios.get(
        `${API_URL}/services/?category=${category}&page=${page}&size=${size}`,
      );
      this.setState({
        services: res.data.data,
        count: res.data.count,
      });
      window.scrollTo(0, 0);
    } catch (error) {
      this.setState({
        error: error.response.data.message,
      });
    }
  }

  public goToPage = async (page: number) => {
    await this.setState({ page });
    this.handlePageRequest();
  }

  public previous = async () => {
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

  public next = async () => {
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

  // public toggleFilter = async category => {
  //   await this.setState({
  //     category,
  //     page: 1,
  //   });

  //   this.handlePageRequest();
  // }

  public render() {
    const renderTabs = this.state.tabs.length ? (
      this.state.tabs.map((tab: any, index) => {
        return (
          <Link key={index} to={`/services/${tab.slug}`}>
            <li
              className={`list-group-item-action list-group-item ${
                tab.slug === this.props.match.params.category ? 'active' : ''
              }`}
              style={{
                marginBottom: 10,
                cursor: 'pointer',
                fontWeight: 700,
              }}
            >
              {tab.label}
            </li>
          </Link>
        );
      })
    ) : (
      <div>No results here</div>
    );

    if (this.state.loading) {
      return <Loading />;
    }
    if (this.state.error) {
      return <Error error={this.state.error} />;
    }
    if (!this.state.services) {
      return (
        <Error error="We are not sure what happened but we did receive a error in our logs." />
      );
    }

    const { count, size, page, services } = this.state;
    const range = (from, to, step = 1) => {
      let i = from;
      const stack = [] as any;

      while (i <= to) {
        stack.push(i);
        i += step;
      }

      return stack;
    };
    const pageNumbers = range(1, Math.ceil(count / size));
    return (
      <React.Fragment>
        <Helmet>
          <title>Services | Shoresh David Brandon</title>
        </Helmet>
        <div className="container-fluid padding-50">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
              <ul className="list-group">{renderTabs}</ul>
            </div>
            <div className="col">
              <div className="row">
                {services.map(
                  (
                    { title, featuredImage, slug, parts, color, category },
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
                        isSeries={parts.length > 1 ? true : false}
                        type="services"
                        color={color}
                        link={
                          slug === 'how-to-get-healed-and-stay-healed'
                            ? 'https://gethealedfast.com/'
                            : null
                        }
                      />
                    </div>
                  ),
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
                      onClick={this.previous}
                    >
                      <span className="page-link">Previous</span>
                    </li>
                    {pageNumbers &&
                      pageNumbers.map((selectedPage: number, i) => (
                        <li
                          key={i}
                          className={`page-item ${
                            page === selectedPage ? 'active' : ''
                          }`}
                        >
                          <span
                            className="page-link"
                            onClick={() => this.goToPage(selectedPage)}
                          >
                            {selectedPage}
                          </span>
                        </li>
                      ))}
                    <li
                      className={
                        page > Math.ceil(count / size) - 1
                          ? 'page-item disabled'
                          : 'page-item'
                      }
                      onClick={this.next}
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
