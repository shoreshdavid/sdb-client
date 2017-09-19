import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import ReactHtmlParser from 'react-html-parser';

const Post = props => {
  return (
    <div className='col-md-4'>
      <div className='card'>
        <Link to={`posts/${props.slug}`}>
          <img className='img-responsive' src={props.featuredImage} />
          <div className='details'>
            <p className='title'>{ReactHtmlParser(props.title)}</p>
            <p>{ ReactHtmlParser(props.content.substring(0, 100)) }</p>
          </div>
        </Link>
      </div>
    </div>
  );
}


// Post.propTypes = {
//   _id: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   slug: PropTypes.string.isRequired,
//   content: PropTypes.string.isRequired,
//   timestamp: PropTypes.string.isRequired
// }

export default Post;