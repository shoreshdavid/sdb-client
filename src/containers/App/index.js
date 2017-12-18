import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Nav } from 'components/Nav';
import './normalize.css';
import './main.css';

// components
import { Contact } from 'components/Contact';
import { Home } from 'components/Home';
import LiveStream from 'components/LiveStream';
import { NotFound } from 'components/NotFound';

// containers
import { Login } from 'containers/Login';
import ProductList from 'containers/ProductList';
import ProductListItem from 'containers/ProductListItem';
import ServiceList from 'containers/ServiceList';
import ServiceListItem from 'containers/ServiceListItem';

// pages
import { AnnouncementPage } from 'pages/AnnouncementPage';
import { ArticleListPage } from 'pages/ArticleListPage';
import { SingleArticle } from 'pages/SingleArticle';

export class App extends Component {

  render() {
    return (
      <React.Fragment>
        <Nav />

        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/live' component={LiveStream} />
          <Route exact path='/announcements' component={AnnouncementPage} />
          <Route exact path='/articles' component={ArticleListPage} />
          <Route exact path='/articles/:slug' component={SingleArticle} />
          <Route exact path='/products' component={ProductList} />
          <Route exact path='/products/:slug' component={ProductListItem} />
          <Route exact path='/services' component={ServiceList} />
          <Route exact path='/services/:slug' component={ServiceListItem} />
          <Route exact path='/contact' component={Contact} />
          <Route component={NotFound} />
        </Switch>

      </React.Fragment>
    );
  }
}