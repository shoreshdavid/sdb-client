import React from 'react';
import { Link } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';
import { Card } from 'shared/Card';

export const Service = ({ service }) => {
  return (
    <div className='grid-item'>
      <Card>
        <Link to={`services/${service.slug}`}>
          <img src={service.featuredImage} alt={service.title} />
          <div className='details'>
            <p className='title'>{ ReactHtmlParser(service.title) }</p>
          </div>
        </Link>
      </Card>
    </div>
  );
}