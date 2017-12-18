import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { App } from 'containers/App';
import { ErrorBoundary } from 'containers/ErrorBoundary';
import { store } from 'sdb-redux';
import registerServiceWorker from './registerServiceWorker';

render(
  <Provider store={store}>
    <BrowserRouter>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
