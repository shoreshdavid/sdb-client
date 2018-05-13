import { Loading } from 'components/Loading';
import { Service } from 'components/Service';
import gql from 'graphql-tag';
import * as React from 'react';
import { Query } from 'react-apollo';

const query = gql`
  {
    services {
      title
      slug
      featuredImage
    }
  }
`;

export const ServiceListPage = () => {
  return (
    <div className="grid-wrapper">
      <Query query={query}>
        {({ loading, error, data }) => {
          if (loading) {
            return <Loading />;
          }
          if (error) {
            return <div>Error</div>;
          }

          return data.services.map(service => {
            return <Service key={service.slug} service={service} />;
          });
        }}
      </Query>
    </div>
  );
};
