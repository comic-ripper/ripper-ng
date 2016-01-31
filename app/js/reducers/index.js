import * as ActionTypes from '../actions';
import merge from 'lodash/merge';

import { routeReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
// import undoable from 'redux-undo';

// Updates an entity cache in response to any action with response.entities.
function entities(state = { comics: {}, chapters: {}, pages: {} }, action) {
  if (action.response && action.response.entities) {
    return merge({}, state, action.response.entities);
  }

  return state;
}

// Updates error message to notify about the failed fetches.
function errorMessage(state = null, action) {
  const { type, error } = action;

  if (type === ActionTypes.RESET_ERROR_MESSAGE) {
    return null;
  } else if (error) {
    return action.error;
  }

  return state;
}

const rootReducer = combineReducers({
  entities,
  errorMessage,
  routing: routeReducer,
});

export default rootReducer;
