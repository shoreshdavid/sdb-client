import React from 'react';
import ArticleList from 'containers/ArticleList';
import { Article } from 'components/Article';

export const ArticleListPage = () => {
  return (
    <div className='grid-wrapper'>
      <ArticleList
        render={(articles) => {
          if (articles.length === 0) { return <h1>No articles</h1> }
          return articles.map((article) => {
            return <Article key={article._id} article={article} />
          });
        }}
      />
    </div>
  );
}