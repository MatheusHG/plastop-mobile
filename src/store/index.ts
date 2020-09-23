import { createStore } from 'redux';
import { Action } from '../interfaces';

const INITIAL_STATE = {
  isLoading: true,
  logged: false,
  client: null,
};

function reducer(state = INITIAL_STATE, action: Action) {
  const { payload } = action;

  switch (action.type) {
    case 'SET_USER_CRED':
      return {
        ...state,
        isLoading: false,
        logged: payload.logged,
      };
    case 'SET_CLIENT':
      return {
        ...state,
        client: payload.client,
      };
  }

  return state;
}

const store = createStore(reducer);

export default store;
