import React from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import './main.css';

export const Announcement = ({ announcement }) => {

  if (!announcement) {
    return <div>Loading...</div>;
  }

  return (
    <div className='announcement'>
      <div className='row'>
        <div className='col-lg-5'>
          <div className='box'>
            <img src={announcement.featuredImage} alt={announcement.slug} />
          </div>
        </div>
        <div className='col-lg-5 col-lg-offset-1'>
          <h3>{announcement.title}</h3>
          { ReactHtmlParser(announcement.content) }
        </div>
      </div>
    </div>
  );
}


Announcement.propTypes = {
  _id: PropTypes.string,
  title: PropTypes.string,
  slug: PropTypes.string,
  featuredImage: PropTypes.string,
  content: PropTypes.string
}