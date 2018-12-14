import * as React from 'react';
import { Link } from 'react-router-dom';

import './card.scss';

const jewishImg = require('../../assets/img/jewish.png');
const serviceImg = require('../../assets/img/service-background-new.png');

export const Card = ({
  featuredImage,
  title,
  slug,
  isSeries,
  link,
  color,
  type,
  category,
}: any) => {
  const img =
    type === 'jewish' ? `url("${jewishImg}")` : `url("${serviceImg}")`;

  // case of external link
  const renderLink = link ? (
    <a href={link} target="_blank">
      {title}
    </a>
  ) : type === 'jewish' ? (
    <Link to={`/${type}/${slug}`}>{title}</Link>
  ) : (
    <Link to={`/${type}/${category}/${slug}`}>{title}</Link>
  );
  // case of jewish link that does not have `resource/:category/:slug`
  // case of article/service that _does_ have `resource/:category/:slug`

  // const renderLink = link ? (
  //   <a href={link} target="_blank">
  //     {title}
  //   </a>
  // ) : (
  //   <Link to={`/${type}/${category}/${slug}`}>{title}</Link>
  // );
  return (
    <div className="card-item">
      {/* {featuredImage ? (
            <img src={featuredImage} alt={title} />
          ) : (
          )} */}
      <div
        className="card-thumb"
        style={{
          backgroundImage: img,
          backgroundColor: color,
        }}
      >
        <div className="card-thumb-title">
          <span>{title}</span>
        </div>

        {isSeries ? (
          <Link to={`/${type}/${category}/${slug}`}>
            <button className="btn btn-primary btn-sm card-series">
              Series
            </button>
          </Link>
        ) : null}
      </div>
      <div className="card-content">
        <h4 className="card-title">{renderLink}</h4>
      </div>
    </div>
  );
};
