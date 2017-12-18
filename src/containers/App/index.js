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

// pages
import { AnnouncementPage } from 'pages/AnnouncementPage';
import { ArticleListPage } from 'pages/ArticleListPage';
import { SingleArticle } from 'pages/SingleArticle';
import { ProductListPage } from 'pages/ProductListPage';
import { SingleProductPage } from 'pages/SingleProductPage';
import { ServiceListPage } from 'pages/ServiceListPage';
import { SingleServicePage } from 'pages/SingleServicePage';

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
}