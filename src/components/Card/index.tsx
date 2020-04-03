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

  const CustomLink = ({children}) => {
    if (link) {
      return (
        <a href={link} target="_blank">
          {children}
        </a>
      );
    }
    if (type === 'jewish') {
      return <Link to={`/${type}/${slug}`}>{children}</Link>
    }
    
    return <Link to={`/${type}/${category}/${slug}`}>{children}</Link>
    
  }


  return (
    <CustomLink>
        <div className="card-item">
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
          </div>
          <div className="card-content">
            <h4 className="card-title">{title}</h4>
          </div>
        </div>
      </CustomLink>
  );
};
