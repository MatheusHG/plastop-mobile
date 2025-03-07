import { createStore } from 'redux';
import { Action, State } from '../interfaces';

const INITIAL_STATE: State = {
  isLoading: true,
  token: '',
  orderProducts: [],
  totalOrder: 0,
};

function reducer(state = INITIAL_STATE, action: Action) {
  const { payload } = action;

  switch (action.type) {
    case 'SET_USER_CRED':
      return {
        ...state,
        isLoading: false,
        token: payload.token,
      };
    case 'SET_PRODUCTS':
      return {
        ...state,
        orderProducts: payload.products,
      };
    case 'SET_TOTAL':
      return {
        ...state,
        totalOrder: payload.totalOrder,
      };
  }

  return state;
}

const store = createStore(reducer);

export default store;
