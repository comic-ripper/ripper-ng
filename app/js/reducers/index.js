
import { combineReducers } from 'redux';

// import undoable from 'redux-undo';

import config from './config';

const rootReducer = combineReducers({
  config,
});

export default (rootReducer);
