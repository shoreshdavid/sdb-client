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
    page: 1,
    count: 0,
    size: 12,
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
          error: err.response.data.error,
        }),
      );
  }

  public handlePageRequest = () => {
    const { category, page, size } = this.state;
    Axios.get(
      `${API_URL}/services?category=${category}&page=${page}&size=${size}`,
    )
      .then(res => {
        this.setState({
          services: res.data.data,
          count: res.data.count,
        });
      })
      .catch(err =>
        this.setState({
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

  public toggleFilter = async category => {
    await this.setState({
      category,
      page: 1
    });

    this.handlePageRequest();
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

    if (this.state.loading) {
      return <Loading />;
    }
    if (this.state.error) {
      return <div>{JSON.stringify(this.state.error)}</div>;
    }

    const { count, size, page, services } = this.state;
    console.log('Count: ', count);
    console.log('Size: ', size);
    console.log('Math.ceil(count / size): ', Math.ceil(count / size));
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
      <Container fluid className="padding-50">
        <Row>
          <Col xs="12" sm="12" md="4" lg="3" xl="3">
            <ListGroup>{renderTabs}</ListGroup>
          </Col>
          <Col>
            <Row>
              {services.map(service => (
                <Col lg="4" xl="4" key={service.slug}>
                  <Service service={service} />
                </Col>
              ))}
            </Row>
            <div
              className="row"
              style={{
                textAlign: 'center',
                margin: '0 auto',
                justifyContent: 'center',
              }}
            >
              <ul className="pagination">
                <li className="page-item" onClick={this.handleLeftPage}>
                  <span className="page-link">Previous</span>
                </li>
                {pageNumbers &&
                  pageNumbers.map((selectedPage: number, i) => (
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
                  ))}
                <li className="page-item" onClick={this.handleRightPage}>
                  <span className="page-link">Next</span>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
