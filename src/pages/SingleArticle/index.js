import React from 'react';
import ArticleListItem from 'containers/ArticleListItem';
import { Loading } from 'shared/Loading';

export const SingleArticle = (props) => {
  return (
    <div>
      <ArticleListItem
        slug={props.match.params.slug}
        render={(article) => {
          if (!article) { return <Loading /> }

          return (
            <div className='article'>
              <img src={article.featuredImage} alt={article.title} />
              <h1>{article.title}</h1>
              <p>{article.body}</p>
            </div>
          );
        }}
      />
    </div>
  );
}