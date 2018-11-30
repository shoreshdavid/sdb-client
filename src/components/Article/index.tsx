import { Image } from 'components/Image';
import * as React from 'react';
import { Link } from 'react-router-dom';

export const Article = ({ article }) => (
  <div className="card-item">
    <div className="card-thumb">
      <Image
        src={article.featuredImage}
        className="lazyload attachment-large size-large"
        alt={article.slug}
      />
    </div>
    <div className="card-information">
      <div className="card-content">
        <h4 className="card-title">
          {article.link ? (
            <a href={article.link} target="_blank" rel="noopener noreferrer">
              {article.title}
            </a>
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
    </div>
  </div>
);
