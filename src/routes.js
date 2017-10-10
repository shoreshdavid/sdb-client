import React from 'react';
import { Route, IndexRoute } from 'react-router';


// components
import { App } from 'components/App';
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


export default (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='/live' component={LiveStream} />
    <Route path='/contact' component={Contact} />

    <Route path='/announcements' component={AnnouncementList} />
    
    <Route path='/articles' component={ArticleList} />
    <Route path='/articles/:slug' component={ArticleListItem} />

    <Route path='/products' component={ProductList} />
    <Route path='/products/:slug' component={ProductListItem} />

    <Route path='/services' component={ServiceList} />
    <Route path='/services/:slug' component={ServiceListItem} />

    <Route path='/login' component={Login} />
    <Route path='*' component={NotFound} />
  </Route>
);