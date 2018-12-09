import * as React from 'react';
import { Link } from 'react-router-dom';

import './card.scss';

export const Card = ({
  featuredImage,
  title,
  slug,
  isSeries,
  link,
  color,
  type,
}: any) => {
  return (
    <div className="card-item">
      <div className="card-thumb" style={{ backgroundColor: color }}>
        {featuredImage ? (
          <img src={featuredImage} alt={title} />
        ) : (
          <div className="card-thumb-title">
            <span>{title}</span>
          </div>
        )}

        {isSeries ? (
          <Link to={`/${type}/${slug}`}>
            <button className="btn btn-primary btn-sm card-series">
              Series
            </button>
          </Link>
        ) : null}
      </div>
      <div className="card-content">
        <h4 className="card-title">
          {link ? (
            <a href={link} target="_blank">
              {title}
            </a>
          ) : (
            <Link to={`/${type}/${slug}`}>{title}</Link>
          )}
        </h4>
      </div>
    </div>
  );
};
