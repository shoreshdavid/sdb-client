import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import './main.css';

export const Article = ({ article }) => {
  return (
    <div className='col-lg-3'>
      <div className='card'>
        <Link to={`/articles/${article.slug}`}>
          <img src={article.featuredImage} alt={article.title} />
          <div className='details'>
            <p className='title'>{article.title}</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

Article.propTypes = {
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  imageUri: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

Article.defaultProps = {
  title: '',
  slug: '',
  imageUri: '',
  body: '',
};
