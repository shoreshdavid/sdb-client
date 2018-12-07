import * as React from 'react';
import { Link } from 'react-router-dom';

// import { Image } from 'components/Image';

import './card.scss';

const colors = ['#5A17C7', '#031AF7', '#08D316', '#00ADFF', '#FF4600'];

export const Card = ({
  featuredImage,
  title,
  slug,
  isSeries,
  link,
  type,
}: any) => {
  const rand = colors[Math.floor(Math.random() * colors.length)];

  return (
    <div className="card-item">
      <div className="card-thumb" style={{ backgroundColor: rand }}>
        {/* {featuredImage ? (
          <Image src={featuredImage} alt={title} />
        ) : (
          <div className="card-thumb-title">
            <span>{title}</span>
          </div>
        )} */}

        {/* TODO: Delete this div/span */}
        <div className="card-thumb-title">
          <span>{title}</span>
        </div>
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
