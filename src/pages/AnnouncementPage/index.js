import React from 'react';
import AnnouncementList from 'containers/AnnouncementList';
import { Announcement } from 'components/Announcement';

export const AnnouncementPage = () => {
  return (
    <div className='container-fluid'>
      <div className='col-lg-10 col-lg-offset-1'>
        <AnnouncementList
          render={( announcements ) => {
            if (announcements.length === 0) { return 'No Announcements' }
            return announcements.map((announcement) =>
              <Announcement key={announcement._id} announcement={announcement}  />
            )
          }}
        />
      </div>
    </div>
  );
}