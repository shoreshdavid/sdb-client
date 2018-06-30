import { Article } from 'components/Article';
import { Loading } from 'components/Loading';
import gql from 'graphql-tag';
import * as React from 'react';
import { Query } from 'react-apollo';

const ArticlesQuery = gql`
  {
    articles {
      createdAt
      title
      featuredImage
      slug
      content
    }
  }
`;

export const ArticleListPage = () => {
  return (
    <main id="main" style={{ paddingLeft: 30, paddingRight: 30 }}>
      <div className="post-content">
        <div>
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
      </div>
    </main>
  );
};
