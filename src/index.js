import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';

import { App } from 'components/App';
import { Error } from 'containers/Error';
import { rootReducer } from 'redux/reducers';
import routes from './routes';
import registerServiceWorker from './registerServiceWorker';

// create store with middleware
const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

// redux store setup
const store = createStoreWithMiddleware(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


render(
  <Provider store={store}>
    <Router routes={routes} history={browserHistory}>
      <Error>
        <App />
      </Error>
    </Router>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
