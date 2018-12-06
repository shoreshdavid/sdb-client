import Axios from 'axios';
import * as React from 'react';

import { Error } from 'components/Error';
import { Image } from 'components/Image';
import { Loading } from 'components/Loading';
import { Part } from 'components/Part';

import { API_URL } from '../../constants';

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
    const { service } = this.state;

    if (this.state.loading) {
      return <Loading />;
    }

    if (this.state.error) {
      return <Error error={this.state.error} />;
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
      <div className="container-fluid padding-50">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-lg-4">
            <Image
              src={this.state.service.featuredImage}
              alt={this.state.service.title}
              className="lazyload"
            />
            <h1
              style={{
                color: '#000',
                padding: '10px 0 10px 0',
                fontSize: 20,
                textAlign: 'center',
              }}
            >
              {this.state.service.title}
            </h1>
            <p style={{ fontSize: 14 }}>{this.state.service.description}</p>
          </div>
          <div className="col-xs-12 col-sm-10 col-lg-8">{renderParts}</div>
        </div>
      </div>
    );
  }
}
