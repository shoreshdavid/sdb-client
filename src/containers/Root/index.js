import React from 'react';
import { Switch, Route } from 'react-router-dom';

// components
import { Nav } from 'components/Nav';
import { Contact } from 'components/Contact';
import { Home } from 'components/Home';
import { LiveStream } from 'components/LiveStream';
import { NotFound } from 'components/NotFound';

// pages
import { AnnouncementPage } from 'pages/AnnouncementPage';
import { ArticleListPage } from 'pages/ArticleListPage';
import { SingleArticle } from 'pages/SingleArticle';
import { ProductListPage } from 'pages/ProductListPage';
import { SingleProductPage } from 'pages/SingleProductPage';
import { ServiceListPage } from 'pages/ServiceListPage';
import { SingleServicePage } from 'pages/SingleServicePage';

export const Root = () =>{
  return (
    <React.Fragment>
      <Nav />

      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/live' component={LiveStream} />
        <Route exact path='/announcements' component={AnnouncementPage} />
        <Route exact path='/articles' component={ArticleListPage} />
        <Route exact path='/articles/:slug' component={SingleArticle} />
        <Route exact path='/products' component={ProductListPage} />
        <Route exact path='/products/:slug' component={SingleProductPage} />
        <Route exact path='/services' component={ServiceListPage} />
        <Route exact path='/services/:slug' component={SingleServicePage} />
        <Route exact path='/contact' component={Contact} />
        <Route component={NotFound} />
      </Switch>

    </React.Fragment>
  );
}