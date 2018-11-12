import { Image } from 'components/Image';
import * as React from 'react';
import { Link } from 'react-router-dom';

export const Article = ({ article }) => (
  <div className="card-item">
    <div className="card-thumb">
      <a>
        <Image
          src={article.featuredImage}
          className="attachment-large size-large"
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
          <i className="fa fa-video" />
          <i className="fa fa-microphone" />
          <i className="fa fa-receipt" />
        </div>
        {article.link ? (
          <a href={article.link}>
            <i
              className="fa fa-arrow-right"
              style={{ flex: 1, textAlign: 'right' }}
            />
          </a>
        ) : (
          <Link to={`/discoveries/${article.slug}`} className="card-read-more">
            <i className="fa fa-arrow-right" />
          </Link>
        )}
      </div>
    </div>
  </div>
);
