import React from 'react';
import ReactHtmlParser from 'react-html-parser';

export const Announcement = ({ announcement }) => {
  return (
    <div className='announcement tile'>
      <div className='row'>
        <div className='col-lg-5'>
          <img src={announcement.featuredImage} alt={announcement.slug} />
        </div>
        <div className='col-lg-5 col-lg-offset-1'>
          <h3>{announcement.title}</h3>
          { ReactHtmlParser(announcement.content) }
        </div>
      </div>
    </div>
  );
}