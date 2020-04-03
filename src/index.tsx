import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { HelpPage } from '~pages/Help';

import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { ScrollToTop } from './components/ScrollToTop';
import { StickyEmail } from './components/StickyEmail';
import { TopBar } from './components/TopBar';
import { ErrorBoundary } from './containers/ErrorBoundary';
import { BooksPage } from './pages/BooksPage';
import { DiscoveriesPage } from './pages/DiscoveriesPage';
import { DonatePage } from './pages/DonatePage';
import { EventsPage } from './pages/EventsPage';
import { HomePage } from './pages/HomePage';
import { JewishPage } from './pages/JewishPage';
import { LiveStreamPage } from './pages/LiveStreamPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { ProductListPage } from './pages/ProductListPage';
import { ServiceListPage } from './pages/ServiceListPage';
import { SingleDiscoveryPage } from './pages/SingleDiscoveryPage';
import { SingleJewishPage } from './pages/SingleJewishPage';
import { SingleServicePage } from './pages/SingleServicePage';

import './assets/scss/bootstrap.scss';
import './style/scss/application.scss';

render(
  <BrowserRouter>
    <ErrorBoundary>
      <ScrollToTop>
        <TopBar />
        <Header />

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/live" component={LiveStreamPage} />
          <Route exact path="/store" component={ProductListPage} />
          <Route exact path="/books" component={BooksPage} />

          <Redirect exact path="/services" to="/services/rabbi-don" />
          <Route exact path="/services/:category" component={ServiceListPage} />
          <Route
            exact
            path="/services/:category/:slug"
            component={SingleServicePage}
          />
          <Redirect exact path="/discoveries" to="/discoveries/evolution" />
          <Route
            exact
            path="/discoveries/:category"
            component={DiscoveriesPage}
          />
          <Route
            exact
            path="/discoveries/:category/:slug"
            component={SingleDiscoveryPage}
          />
          <Route exact path="/events" component={EventsPage} />
          <Route exact path="/jewish" component={JewishPage} />
          <Route exact path="/jewish/:slug" component={SingleJewishPage} />
          <Route exact path="/donate" component={DonatePage} />
          <Route exact path="/privacy-policy" component={PrivacyPolicyPage} />
          <Route exact path="/help" component={HelpPage} />
          <Route component={NotFoundPage} />
        </Switch>
        <StickyEmail />
        <Footer />
      </ScrollToTop>
    </ErrorBoundary>
  </BrowserRouter>,
  document.getElementById('root'),
);
