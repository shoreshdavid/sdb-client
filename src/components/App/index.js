import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Nav } from 'components/Nav';
import './normalize.css';
import './main.css';

// components
import { Contact } from 'components/Contact';
import { Home } from 'components/Home';
import { LiveStream } from 'components/LiveStream';
import { NotFound } from 'components/NotFound';

// containers
import AnnouncementList from 'containers/AnnouncementList';
import ArticleList from 'containers/ArticleList';
import ArticleListItem from 'containers/ArticleListItem';
import { Login } from 'containers/Login';
import ProductList from 'containers/ProductList';
import ProductListItem from 'containers/ProductListItem';
import ServiceList from 'containers/ServiceList';
import ServiceListItem from 'containers/ServiceListItem';

export const App = () => {
  return (
    <div>
      <Nav />

      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/live' component={LiveStream} />
        <Route exact path='/announcements' component={AnnouncementList} />
        <Route exact path='/articles' component={ArticleList} />
        <Route exact path='/articles/:slug' component={ArticleListItem} />
        <Route exact path='/products' component={ProductList} />
        <Route exact path='/products/:slug' component={ProductListItem} />
        <Route exact path='/services' component={ServiceList} />
        <Route exact path='/services/:slug' component={ServiceListItem} />
        <Route exact path='/contact' component={Contact} />
        <Route component={NotFound} />
      </Switch>

    </div>
  );
}