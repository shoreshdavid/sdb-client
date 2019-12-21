import Axios from 'axios';
import * as React from 'react';
import { Helmet } from 'react-helmet';
import ReactHtmlParser from 'react-html-parser';

import { Error } from '../../components/Error';
import { Loading } from '../../components/Loading';

import { API_URL } from '../../constants';

const image = require('../../assets/img/service-background.png');

export class SingleServicePage extends React.Component<any, any> {
  public state = {
    loading: true,
    error: null,
    service: {} as any,
  };

  public componentDidMount() {
    Axios.get(`${API_URL}/services/${this.props.match.params.slug}`)
      .then(res => this.setState({ loading: false, service: res.data }))
      .catch(error =>
        this.setState({ loading: false, error: error.response.data.message }),
      );
  }

  public render() {
    const { loading, error, service } = this.state;

    if (loading) {
      return <Loading />;
    }

    if (error) {
      return <Error error={error} />;
    }

    return (
      <React.Fragment>
        <Helmet>
          <title>{service.title}</title>
        </Helmet>
        <div className="container-fluid padding-50">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 single-left-side">
              <div
                className="thumb"
                style={{
                  backgroundImage: `url("${image}")`,
                  backgroundColor: service.color ? service.color : '#000',
                }}
              >
                {service.featuredImage ? (
                  <img src={service.featuredImage} alt={service.title} />
                ) : (
                  <div className="thumb-title">
                    <span>{service.title}</span>
                  </div>
                )}
              </div>
              <h1
                style={{
                  fontSize: 18,
                  padding: '5px 0 10px 0',
                }}
              >
                {service.title}
              </h1>
              <p style={{ fontSize: 14 }}>{service.description}</p>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-8">
              <div className="single-page-content single-page__right">
                {ReactHtmlParser(service.content)}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
