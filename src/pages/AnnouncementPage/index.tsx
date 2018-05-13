import { Announcement } from 'components/Announcement';
import { Loading } from 'components/Loading';
import gql from 'graphql-tag';
import * as React from 'react';
import { Query } from 'react-apollo';

const AnnouncementsQuery = gql`
  {
    announcements {
      id
      title
      slug
      content
      featuredImage
    }
  }
`;

export const AnnouncementPage = () => {
  return (
    <div className="container-fluid">
      <div className="col-lg-10 col-lg-offset-1">
        <Query query={AnnouncementsQuery}>
          {({ loading, error, data }) => {
            if (loading) {
              return <Loading />;
            }
            if (error) {
              return <div>Error</div>;
            }
            console.log(data.announcements);

            return data.announcements.map(announcement => (
              <Announcement key={announcement.id} announcement={announcement} />
            ));
          }}
        </Query>
      </div>
    </div>
  );
};
