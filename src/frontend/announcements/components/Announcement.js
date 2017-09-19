import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import ReactHtmlParser from 'react-html-parser';

const Announcement = props => {

  // if (!props.announcements) {
  //   return (
  //     <div>Loading...</div>
  //   );
  // }

  // if (props.announcements.length === 0) {
  //   return (
  //     <div>No announcements yet...</div>
  //   )
  // }

  return (
    <div className='announcement-list'>
      <div className='row'>
        <div className='col-lg-5'>
          <div className='box'>
            <img src={props.featuredImage} />
          </div>
        </div>
        <div className='col-lg-7'>
          <h3>{props.title}</h3>
          <p>{ ReactHtmlParser(props.content) }</p>
        </div>
      </div>
    </div>
  );
}


Announcement.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  featuredImage: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}

export default Announcement;