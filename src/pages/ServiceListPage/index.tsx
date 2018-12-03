import Axios from 'axios';
import * as React from 'react';

import { Card } from 'components/Card';
import { Loading } from 'components/Loading';

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

    search: '',
    results: [],
  };

  public componentDidMount() {
    const { category, size, page } = this.state;
    Axios.all([
      Axios.get(
        `${API_URL}/services?category=${category}&page=${page}&size=${size}`,
      ),
      Axios.get(`${API_URL}/tabs/services`),
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
      .catch(err =>
        this.setState({
          loading: false,
          error: err,
        }),
      );
  }

  public handlePageRequest = async () => {
    const { category, page, size } = this.state;
    try {
      const res: any = await Axios.get(
        `${API_URL}/services?category=${category}&page=${page}&size=${size}`,
      );
      this.setState({
        services: res.data.data,
        count: res.data.count,
      });
    } catch (err) {
      this.setState({
        error: err.response.data.error,
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

  public toggleFilter = async category => {
    await this.setState({
      category,
      page: 1,
    });

    this.handlePageRequest();
  }

  // public handleSearchRequest = (e: any) => {
  //   e.preventDefault();
  //   Axios.get(`${API_URL}/services/search?searchText=${this.state.search}`)
  //     .then(res => {
  //       console.log('res: ', res);
  //       this.setState({
  //         data: res.data.data,
  //       });
  //     })
  //     .catch(err => {
  //       console.log(JSON.stringify(err));
  //       this.setState({
  //           error: err.response.data.error,
  //         });
  //     });
  // }

  public render() {
    const renderTabs = this.state.tabs.length ? (
      this.state.tabs.map((tab: any, index) => {
        return (
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
        );
      })
    ) : (
      <div>No results here</div>
    );

    if (this.state.loading) {
      return <Loading />;
    }
    if (this.state.error) {
      return <div>{JSON.stringify(this.state.error)}</div>;
    }
    if (!this.state.services) {
      return (
        <div className="container-fluid padding-50">
          <div className="row">
            <h1>Server Error</h1>
          </div>
        </div>
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
      <div className="container-fluid padding-50">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-3 col-xl-3">
            <ul className="list-group">{renderTabs}</ul>
          </div>
          <div className="col">
            <div className="row">
              {services.map(service => (
                <div className="col-lg-4 col-xl-4" key={service.slug}>
                  <Card
                    title={service.title}
                    featuredImage={service.featuredImage}
                    slug={service.slug}
                    isSeries={service.parts.length > 1 ? true : false}
                    type="services"
                  />
                </div>
              ))}
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
          </div>
        </div>
      </div>
    );
  }
}
