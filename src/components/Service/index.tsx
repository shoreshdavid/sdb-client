import * as React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

import { Image } from 'components/Image';

export const Service = ({ service }) => {
  return (
    <React.Fragment>
      <div className="card-item">
        <div className="card-thumb">
          <a>
            <Image
              src={service.featuredImage}
              className="attachment-large size-large"
              alt={service.slug}
            />
          </a>
          {service.parts.length > 1 ? (
            <Button color="primary" size="sm" className="card-series">
              Series
            </Button>
          ) : null}
        </div>
        <div className="card-information">
          <div className="card-content">
            <h4 className="card-title">
              <Link to={`/services/${service.slug}`}>{service.title}</Link>
            </h4>
            <div className="card-description">
              <p>{service.description}</p>
            </div>
          </div>
          <div className="card-links">
            {service.parts.length < 2 ? (
              <div>
                <a
                  href={service.parts[0] ? service.parts[0].youtubeLink : null}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-video" />
                </a>
                <a
                  href={service.parts[0] ? service.parts[0].anchorLink : null}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-microphone" />
                </a>
                <a
                  href={service.parts[0] ? service.parts[0].mediumLink : null}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-receipt" />
                </a>
              </div>
            ) : null}
            <Link to={`/services/${service.slug}`} className="card-read-more">
              <i className="fa fa-arrow-right" />
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
