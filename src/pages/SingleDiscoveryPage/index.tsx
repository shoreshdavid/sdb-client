import Axios from 'axios';
import { Image } from 'components/Image';
// import { Error } from 'components/Error';
import { Loading } from 'components/Loading';
import { Part } from 'components/Part';
import * as React from 'react';
import { API_URL } from '../../constants';

import ReactHtmlParser from 'react-html-parser';

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
      return (
        <div>
          We are sorry. Something went wrong. Please refresh and try again.
          Server message: {this.state.error}
        </div>
      );
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
      <h1>No Parts...</h1>
    );
    const { featuredImage, content, title } = this.state.discovery;
    return (
      <div className="container-fluid padding-50">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-lg-4">
            <Image src={featuredImage} alt={title} className="lazyload" />
            <h4
              style={{
                color: '#000',
                padding: '30px 0 10px 0',
                fontSize: 18,
              }}
            >
              {title}
            </h4>
          </div>
          <div className="col-xs-12 col-sm-10 col-lg-8">
            {content && <div>{ReactHtmlParser(content)}</div>}
            {renderParts}
          </div>
        </div>
      </div>
    );
  }
}
