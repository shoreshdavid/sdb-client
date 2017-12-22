import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import { Tile } from 'shared/Tile';

export const Announcement = ({ announcement }) => {
  return (
    <div className='announcement'>
      <Tile>
      <div className='row'>
        <div className='col-lg-5'>
          <img src={announcement.featuredImage} alt={announcement.slug} />
        </div>
        <div className='col-lg-5 col-lg-offset-1'>
          <h3>{announcement.title}</h3>
          { ReactHtmlParser(announcement.content) }
        </div>
      </div>
      </Tile>
    </div>
  );
}