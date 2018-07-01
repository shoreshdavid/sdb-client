import { VideoModal } from 'components/VideoModal';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

export class Service extends React.Component<any, any> {
  public state = {
    showModal: false,
  };

  public toggleVideoClick = event => {
    this.setState({
      showModal: !this.state.showModal,
    });
  }

  public renderVideoModal = () => (
    <div>
      <VideoModal modal={true} />
    </div>
  )

  public render() {
    const { service } = this.props;
    return (
      <React.Fragment>
        <VideoModal
          modal={this.state.showModal}
          video={service.videoUri}
          toggle={e => this.toggleVideoClick(e)}
        />
        <div className="card-item">
          <div className="card-thumb">
            <a>
              <img
                src={service.featuredImage}
                className="attachment-large size-large"
                alt={service.slug}
              />
            </a>
            {/* {service.isSeries} */}
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
                <i className="fa fa-video" onClick={this.toggleVideoClick} />
                <i className="fa fa-microphone" />
                <i className="fa fa-receipt" />
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
