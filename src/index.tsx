import ApolloClient from 'apollo-boost';
import * as React from 'react';
import { ApolloProvider } from 'react-apollo';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { ErrorBoundary } from 'containers/ErrorBoundary';
import { Root } from 'containers/Root';
// import registerServiceWorker from './registerServiceWorker';
import 'styles/application.css';

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  request: async operation => {
    const token = await localStorage.getItem('token');
    operation.setContext({
      headers: {
        authorization: token,
      },
    });
  },
});

render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <ErrorBoundary>
        <Root />
      </ErrorBoundary>
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root'),
);

// registerServiceWorker();
