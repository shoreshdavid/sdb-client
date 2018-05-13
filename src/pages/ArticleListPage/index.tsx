import { Article } from 'components/Article';
import { Loading } from 'components/Loading';
import gql from 'graphql-tag';
import * as React from 'react';
import { Query } from 'react-apollo';

const ArticlesQuery = gql`
  {
    articles {
      title
      featuredImage
      slug
    }
  }
`;

export const ArticleListPage = () => {
  return (
    <div className="grid-wrapper">
      <Query query={ArticlesQuery}>
        {({ loading, error, data }) => {
          if (loading) {
            return <Loading />;
          }

          if (error) {
            return <div>Error</div>;
          }

          return data.articles.map(article => {
            return <Article key={article.slug} article={article} />;
          });
        }}
      </Query>
    </div>
  );
};
