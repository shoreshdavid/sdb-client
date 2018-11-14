import { Image } from 'components/Image';
import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import {
  faVideo,
  faMicrophone,
  faReceipt,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';

export const Article = ({ article }) => (
  <div className="card-item">
    <div className="card-thumb">
      <a>
        <Image
          src={article.featuredImage}
          className="lazyload attachment-large size-large"
          alt={article.slug}
        />
      </a>
      <span className="card-series" />
    </div>
    <div className="card-information">
      <div className="card-content">
        <h4 className="card-title">
          {article.link ? (
            <a href={article.link}>{article.title}</a>
          ) : (
            <Link
              to={`/discoveries/${article.slug}`}
              className="sv-custom-color"
            >
              {article.title}
            </Link>
          )}
        </h4>
      </div>
      <div className="card-links">
        <div>
          <FontAwesomeIcon icon={faVideo} />
          <FontAwesomeIcon icon={faMicrophone} />
          <FontAwesomeIcon icon={faReceipt} />
        </div>
        {article.link ? (
          <a href={article.link}>
            <FontAwesomeIcon
              icon={faArrowRight}
              style={{ flex: 1, textAlign: 'right' }}
            />
            {/* <i
              className="fa fa-arrow-right"
              style={{ flex: 1, textAlign: 'right' }}
            /> */}
          </a>
        ) : (
          <Link to={`/discoveries/${article.slug}`} className="card-read-more">
            <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        )}
      </div>
    </div>
  </div>
);
