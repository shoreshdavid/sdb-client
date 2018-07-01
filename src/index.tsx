import ApolloClient from 'apollo-boost';
import * as React from 'react';
import { ApolloProvider } from 'react-apollo';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { ErrorBoundary } from 'containers/ErrorBoundary';

// components
import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import { ScrollToTop } from 'components/ScrollToTop';
import { SubFooter } from 'components/SubFooter';
import { TopBar } from 'components/TopBar';

// pages
import { ArticleListPage } from 'pages/ArticleListPage';
import { DiscoveriesPage } from 'pages/DiscoveriesPage';
import { DonatePage } from 'pages/DonatePage';
import { EventsPage } from 'pages/EventsPage';
import { HomePage } from 'pages/HomePage';
import { JewishPage } from 'pages/JewishPage';
import { LiveStreamPage } from 'pages/LiveStreamPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ProductListPage } from 'pages/ProductListPage';
import { ServiceListPage } from 'pages/ServiceListPage';
import { SingleArticle } from 'pages/SingleArticle';
import { SingleServicePage } from 'pages/SingleServicePage';

import './assets/scss/bootstrap.scss';

import 'style/scss/application.scss';
import { API_URL } from './constants';

const client = new ApolloClient({
  uri: API_URL,
});

render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <ErrorBoundary>
        <ScrollToTop>
          <React.Fragment>
            <TopBar />
            <Header />

            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/live" component={LiveStreamPage} />
              <Route exact path="/articles" component={ArticleListPage} />
              <Route exact path="/articles/:slug" component={SingleArticle} />
              <Route exact path="/store" component={ProductListPage} />
              <Route exact path="/services" component={ServiceListPage} />
              <Route
                exact
                path="/services/:slug"
                component={SingleServicePage}
              />
              <Route exact path="/discoveries" component={DiscoveriesPage} />
              <Route exact path="/events" component={EventsPage} />
              <Route exact path="/jewish" component={JewishPage} />
              <Route exact path="/donate" component={DonatePage} />
              <Route component={NotFoundPage} />
            </Switch>
            <Footer />
            <SubFooter />
          </React.Fragment>
        </ScrollToTop>
      </ErrorBoundary>
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root'),
);
