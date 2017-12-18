import React from 'react';
import ArticleList from 'containers/ArticleList';
import { Article } from 'components/Article';
import { Loading } from 'shared/Loading';

export const ArticleListPage = () => {
  return (
    <div className='grid-wrapper'>
      <ArticleList
        render={(articles) => {
          if (articles.length === 0) { return <Loading /> }
          
          return articles.map((article) => {
            return <Article key={article._id} article={article} />
          });
        }}
      />
    </div>
  );
}