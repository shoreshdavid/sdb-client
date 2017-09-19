import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import ReactHtmlParser from 'react-html-parser';

const Service = props => {
  const { content } = props;
  return (
    <div className='col-md-3'>
      <div className='card'>
        <Link to={`services/${props.slug}`}>
          <img src={props.featuredImage} />
          <div className='details'>
            <p className='title'>{ReactHtmlParser(props.title)}</p>
            {/* <p>{ ReactHtmlParser(content.substring(0, 100)) }</p> */}
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

export default Service;