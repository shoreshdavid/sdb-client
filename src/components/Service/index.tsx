import * as React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

export class Service extends React.Component<any, any> {
  public render() {
    const { service } = this.props;
    return (
      <React.Fragment>
        <div className="card-item">
          <div className="card-thumb">
            <a>
              <img
                src={service.featuredImage}
                className="attachment-large size-large"
                alt={service.slug}
              />
            </a>
            <Button color="primary" size="sm" className="card-series">
              Series
            </Button>
          </div>
          <div className="card-information">
            <div className="card-content">
              <div className="card-speaker">
                <span className="cate">
                  <Link to="/services">{service.category}</Link>
                </span>
              </div>
              <h4 className="card-title">
                <Link to={`/services/${service.slug}`}>{service.title}</Link>
              </h4>
              <div className="card-description">
                <p>{service.description}</p>
              </div>
            </div>
            <div className="card-links">
              <div>
                <a
                  href="https://youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-video" />
                </a>
                <a
                  href="https://anchor.fm/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-microphone" />
                </a>
                <a
                  href="https://medium.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-receipt" />
                </a>
              </div>
              <Link to={`/services/${service.slug}`} className="card-read-more">
                <i className="fa fa-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
