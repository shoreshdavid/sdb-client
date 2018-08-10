import ApolloClient from 'apollo-boost';
// import { onError } from 'apollo-link-error';
import * as React from 'react';
import { ApolloProvider } from 'react-apollo';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Containers
import { ErrorBoundary } from 'containers/ErrorBoundary';

// components
import { Header } from 'components/Header';
import { ScrollToTop } from 'components/ScrollToTop';
import { StickyEmail } from 'components/StickyEmail';
import { SubFooter } from 'components/SubFooter';
import { TopBar } from 'components/TopBar';

// pages
import { DiscoveriesPage } from 'pages/DiscoveriesPage';
import { DonatePage } from 'pages/DonatePage';
import { EventsPage } from 'pages/EventsPage';
import { HomePage } from 'pages/HomePage';
import { JewishPage } from 'pages/JewishPage';
import { LiveStreamPage } from 'pages/LiveStreamPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { PrivacyPolicyPage } from 'pages/PrivacyPolicyPage';
import { ProductListPage } from 'pages/ProductListPage';
import { ServiceListPage } from 'pages/ServiceListPage';
import { SingleServicePage } from 'pages/SingleServicePage';

import './assets/scss/bootstrap.scss';
// import 'bootstrap/dist/css/bootstrap.min.css';

import 'style/scss/application.scss';
import { API_URL } from './constants';

// const link: ApolloLink = onError(({ graphQLErrors, networkError }) => {
//   if (graphQLErrors) {
//     graphQLErrors.map(({ message, locations, path }) =>
//       console.log(
//         `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
//       ),
//     );
//   }
//   if (networkError) {
//     console.log(`[Network error]: ${networkError}`);
//   }
// });

const client = new ApolloClient({
  uri: API_URL,
  // link,
});

render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <ErrorBoundary>
        <ScrollToTop>
          <TopBar />
          <Header />

          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/live" component={LiveStreamPage} />
            {/* <Route exact path="/articles" component={ArticleListPage} /> */}
            {/* <Route exact path="/articles/:slug" component={SingleArticle} /> */}
            <Route exact path="/store" component={ProductListPage} />
            <Route exact path="/services" component={ServiceListPage} />
            <Route exact path="/services/:slug" component={SingleServicePage} />
            <Route exact path="/discoveries" component={DiscoveriesPage} />
            <Route exact path="/events" component={EventsPage} />
            <Route exact path="/jewish" component={JewishPage} />
            <Route exact path="/donate" component={DonatePage} />
            <Route exact path="/privacy-policy" component={PrivacyPolicyPage} />
            <Route component={NotFoundPage} />
          </Switch>
          <StickyEmail />
          <SubFooter />
        </ScrollToTop>
      </ErrorBoundary>
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root'),
);
