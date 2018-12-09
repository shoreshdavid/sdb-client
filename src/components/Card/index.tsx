import * as React from 'react';
import { Link } from 'react-router-dom';

import './card.scss';

const jewishImg = require('../../assets/img/jewish.png');
const serviceImg = require('../../assets/img/service-background.png');

// const d = require('../../assets/img/jewish.png')

export const Card = ({
  featuredImage,
  title,
  slug,
  isSeries,
  link,
  color,
  type,
}: any) => {
  const img =
    type === 'jewish' ? `url("${jewishImg}")` : `url("${serviceImg}")`;
  return (
    <div className="card-item">
      {/* {featuredImage ? (
            <img src={featuredImage} alt={title} />
          ) : (
          )} */}
      <div
        style={{
          backgroundImage: img,
          backgroundColor: color,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          display: 'flex',
          flex: 1,
          justifyContent: 'center',
          width: '100%',
          height: 200,
        }}
      >
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
