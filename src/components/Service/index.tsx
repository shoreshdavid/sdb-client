import { Card } from 'components/Card';
import * as React from 'react';
import ReactHtmlParser from 'react-html-parser';
import { Link } from 'react-router-dom';

export const Service = ({ service }) => {
  return (
    <div className="grid-item">
      <Card>
        <Link to={`services/${service.slug}`}>
          <img src={service.featuredImage} alt={service.title} />
          <div className="details">
            <p className="title">{ReactHtmlParser(service.title)}</p>
          </div>
        </Link>
      </Card>
    </div>
  );
};
