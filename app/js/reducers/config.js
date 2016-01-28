import { CHANGE_CONFIG } from '../constants/ActionTypes';

import { Map } from 'immutable';

export default function config(state = Map(), action) {
  switch (action.type) {
    case CHANGE_CONFIG:
      return state.set(action.key, action.value);
    default:
      return state;
  }
}
