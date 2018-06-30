import { Loading } from 'components/Loading';
import gql from 'graphql-tag';
import * as React from 'react';
import { Query } from 'react-apollo';

const query = gql`
  query article($slug: String) {
    article(where: { slug: $slug }) {
      title
      featuredImage
      content
    }
  }
`;

export const SingleArticle = ({ match }) => {
  return (
    <div>
      <Query query={query} variables={{ slug: match.params.slug }}>
        {({ loading, error, data }) => {
          if (loading) {
            return <Loading />;
          }
          if (error) {
            return <div>Error {error}</div>;
          }

          const { article } = data;

          return (
            <div className="article">
              <img src={article.featuredImage} alt={article.title} />
              <h1>{article.title}</h1>
              <p>{article.content}</p>
            </div>
          );
        }}
      </Query>
    </div>
  );
};
