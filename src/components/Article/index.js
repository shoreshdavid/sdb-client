import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { Card } from 'components/Card';

export const Article = ({ article }) => {
  return (
    <div className='grid-item'>
      <Card>
        <Link to={`/articles/${article.slug}`}>
          <img src={article.featuredImage} alt={article.title} />
          <div className='details'>
            <p className='title'>{article.title}</p>
          </div>
        </Link>
      </Card>
    </div>
  );
};