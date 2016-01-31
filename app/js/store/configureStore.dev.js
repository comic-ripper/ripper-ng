import { createStore, applyMiddleware, compose } from 'redux';
import { syncHistory } from 'react-router-redux';

import createHistory from 'history/lib/createHashHistory';

import DevTools from 'containers/Root/DevTools';
import thunk from 'redux-thunk';
import api from '../middleware/api';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';

const history = createHistory();
const reduxRouterMiddleware = syncHistory(history);

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(thunk, api, reduxRouterMiddleware, createLogger()),
      DevTools.instrument()
    )
  );

  // Required for replaying actions from devtools to work
  reduxRouterMiddleware.listenForReplays(store);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
