import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { rootReducer } from '../reducers';

// create store with middleware
const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

// redux store setup
export const store = createStoreWithMiddleware(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);