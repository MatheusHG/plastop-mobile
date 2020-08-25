import { createStore } from 'redux';
import { Action } from '../interfaces';

const INITIAL_STATE = {
  isLoading: true,
  logged: false,
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
    case 'REMOVE_USER_CRED':
      return {
        ...state,
        isLoading: false,
        logged: false,
      };
  }

  return state;
}

const store = createStore(reducer);

export default store;
