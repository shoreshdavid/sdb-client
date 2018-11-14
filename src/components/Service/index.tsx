import * as React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faVideo,
  faMicrophone,
  faReceipt,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';

import { Image } from 'components/Image';

export const Service = ({ service }) => {
  return (
    <React.Fragment>
      <div className="card-item">
        <div className="card-thumb">
          <a>
            <Image
              src={service.featuredImage}
              className="lazyload attachment-large size-large"
              alt={service.slug}
            />
          </a>
          {service.parts.length > 1 ? (
            <Link to={`/services/${service.slug}`}>
              <button className="btn btn-primary btn-sm card-series">
                Series
              </button>
            </Link>
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
                  <FontAwesomeIcon icon={faVideo} />
                </a>
                <a
                  href={service.parts[0] ? service.parts[0].anchorLink : null}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faMicrophone} />
                </a>
                <a
                  href={service.parts[0] ? service.parts[0].mediumLink : null}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faReceipt} />
                </a>
              </div>
            ) : null}
            <Link to={`/services/${service.slug}`} className="card-read-more">
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
