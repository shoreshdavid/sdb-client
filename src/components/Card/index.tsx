import * as React from 'react';
import { Link } from 'react-router-dom';
import { Image } from '../Image';

export const Card = ({
  featuredImage,
  title,
  slug,
  isSeries,
  link,
  type,
}: any) => (
  <div className="card-item">
    <div className="card-thumb">
      <Image
        src={featuredImage}
        className="lazyload attachment-large size-large"
        alt={slug}
      />
      {isSeries ? (
        <Link to={`/${type}/${slug}`}>
          <button className="btn btn-primary btn-sm card-series">Series</button>
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
