import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

// components
import { Contact } from 'components/Contact';
import { Home } from 'components/Home';
import { LiveStream } from 'components/LiveStream';
import { Nav } from 'components/Nav';
import { NotFound } from 'components/NotFound';

// pages
import { AnnouncementPage } from 'pages/AnnouncementPage';
import { ArticleListPage } from 'pages/ArticleListPage';
import { ProductListPage } from 'pages/ProductListPage';
import { ServiceListPage } from 'pages/ServiceListPage';
import { SingleArticle } from 'pages/SingleArticle';
import { SingleProductPage } from 'pages/SingleProductPage';
import { SingleServicePage } from 'pages/SingleServicePage';

export const Root = () => {
  return (
    <React.Fragment>
      <Nav />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/live" component={LiveStream} />
        <Route exact path="/announcements" component={AnnouncementPage} />
        <Route exact path="/articles" component={ArticleListPage} />
        <Route exact path="/articles/:slug" component={SingleArticle} />
        <Route exact path="/products" component={ProductListPage} />
        <Route exact path="/products/:slug" component={SingleProductPage} />
        <Route exact path="/services" component={ServiceListPage} />
        <Route exact path="/services/:slug" component={SingleServicePage} />
        <Route exact path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </React.Fragment>
  );
};
