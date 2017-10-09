import React from 'react';
import { Route, IndexRoute } from 'react-router';


// global components
import { AppIndex } from './app/AppIndex';
import { NotFound } from './app/NotFound';

import {
  Home,
  LiveStream,
  Contact,
  AnnouncementList,
  PostList,
  SinglePost,
  ServiceList,
  SingleService,
  ProductList
} from './frontend/index';


export default (
  <Route path='/' component={AppIndex}>
    <IndexRoute component={Home} />
    <Route path='live' component={LiveStream} />

    <Route path='announcements' component={AnnouncementList}/>

    <Route path='posts'>
      <IndexRoute component={PostList} />
      <Route path=':slug' component={SinglePost} />
    </Route>

    <Route path='services'>
      <IndexRoute component={ServiceList} />
      <Route path=':slug' component={SingleService} />
    </Route>

    <Route path='products' component={ProductList} />

    <Route path='contact' component={Contact} />

    <Route path='*' component={NotFound} />
  </Route>
);