import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router';
import ReactHtmlParser from 'react-html-parser';

export const Service = ({ service }) => {
  return (
    <div className='col-md-3'>
      <div className='card'>
        <Link to={`services/${service.slug}`}>
          <img src={service.featuredImage} />
          <div className='details'>
            <p className='title'>{ ReactHtmlParser(service.title) }</p>
          </div>
        </Link>
      </div>
    </div>
  );
}


// Service.propTypes = {
//   id: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   slug: PropTypes.string.isRequired,
//   content: PropTypes.string.isRequired,
//   timestamp: PropTypes.string.isRequired
// }