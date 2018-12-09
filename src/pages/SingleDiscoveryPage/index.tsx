import Axios from 'axios';
import * as React from 'react';
import { Helmet } from 'react-helmet';
import ReactHtmlParser from 'react-html-parser';

import { Error } from 'components/Error';
import { Loading } from 'components/Loading';
import { Part } from 'components/Part';

import { API_URL } from '../../constants';

const image = require('../../assets/img/service-background-new.png');

export class SingleDiscoveryPage extends React.Component<any, any> {
  public state = {
    loading: true,
    error: null,
    discovery: {} as any,
  };

  public componentDidMount() {
    Axios.get(`${API_URL}/articles/${this.props.match.params.slug}`)
      .then(res => this.setState({ loading: false, discovery: res.data.data }))
      .catch(err =>
        this.setState({ loading: false, error: err.response.statusText }),
      );
  }

  public render() {
    const { discovery } = this.state;

    if (this.state.loading) {
      return <Loading />;
    }
    if (this.state.error) {
      return <Error error={this.state.error} />;
    }
    const renderParts = discovery.parts.length ? (
      discovery.parts.map((part, i: number) => (
        <Part
          key={i}
          partNumber={part.partNumber}
          mediumLink={part.mediumLink}
          anchorLink={part.anchorLink}
          youtubeLink={part.youtubeLink}
        />
      ))
    ) : (
      <div>
        <p>We're sorry. It doesn't appear this article has any parts.</p>
      </div>
    );
    const { featuredImage, content, title, color } = this.state.discovery;
    return (
      <React.Fragment>
        <Helmet>
          <title>{title}</title>
        </Helmet>
        <div className="container-fluid padding-50">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 single-left-side">
              <div
                className="thumb"
                style={{
                  backgroundImage: `url("${image}")`,
                  backgroundColor: color ? color : '#000',
                  height: 100,
                }}
              >
                {featuredImage ? (
                  <img src={featuredImage} alt={title} />
                ) : (
                  <div className="thumb-title">
                    <span>{title}</span>
                  </div>
                )}
              </div>
              <h1
                style={{
                  fontSize: 18,
                  padding: '5px 0 10px 0',
                }}
              >
                {title}
              </h1>
              {/* <p style={{ fontSize: 14 }}>{description}</p> */}
            </div>
            <div className="col-xs-12 col-sm-10 col-lg-8">
              {renderParts}
              {content && <div>{ReactHtmlParser(content)}</div>}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
