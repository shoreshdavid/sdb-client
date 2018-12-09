import Axios from 'axios';
import * as React from 'react';
import { Helmet } from 'react-helmet';
import ReactHtmlParser from 'react-html-parser';

import { Error } from 'components/Error';
import { Loading } from 'components/Loading';
import { Part } from 'components/Part';

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
      .then(res => this.setState({ loading: false, service: res.data.data }))
      .catch(err =>
        this.setState({ loading: false, error: err.response.statusText }),
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

    const renderParts = service.parts.length ? (
      service.parts.map(part => (
        <Part
          key={part._id}
          partNumber={part.partNumber}
          mediumLink={part.mediumLink}
          anchorLink={part.anchorLink}
          youtubeLink={part.youtubeLink}
        />
      ))
    ) : (
      <div>
        <p>We're sorry. It doesn't appear this service has any parts.</p>
      </div>
    );
    return (
      <React.Fragment>
        <Helmet>
          <title>{service.title}</title>
        </Helmet>
        <div className="container-fluid padding-50">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-lg-4">
              <div
                className="card-thumb"
                style={{
                  backgroundImage: image,
                  backgroundColor: service.color ? service.color : '#000',
                  height: '100%',
                  width: '100%',
                  backgroundSize: 'contain',
                }}
              >
                {service.featuredImage ? (
                  <img src={service.featuredImage} alt={service.title} />
                ) : (
                  <div className="card-thumb-title">
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
            <div className="col-xs-12 col-sm-10 col-lg-8">
              {renderParts}
              <div className="single-page-content">
                {service.content && (
                  <div>{ReactHtmlParser(service.content)}</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
