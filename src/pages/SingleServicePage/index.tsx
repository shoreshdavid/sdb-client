import { Loading } from 'components/Loading';
import gql from 'graphql-tag';
import * as React from 'react';
import { Query } from 'react-apollo';
import ReactHtmlParser from 'react-html-parser';
import { Link } from 'react-router-dom';

const query = gql`
  query service($slug: String!) {
    service(where: { slug: $slug }) {
      title
      category
      content
      videoUri
    }
  }
`;

export const SingleServicePage = ({ match }) => {
  return (
    <Query query={query} variables={{ slug: match.params.slug }}>
      {({ loading, error, data }) => {
        if (loading) {
          return <Loading />;
        }
        if (error) {
          return <div>Error</div>;
        }

        const { service } = data;

        return (
          <div className="service">
            <iframe
              src={`${service.videoUri}?rel=0&amp;showinfo=0`}
              title={service.title}
              frameBorder="0"
              allowFullScreen
            />
            <div className="content">
              <h1>{service.title}</h1>
              <p>{ReactHtmlParser(service.content)}</p>
              <Link to="/services/categories">{service.category}</Link>
            </div>
          </div>
        );
      }}
    </Query>
  );
};
