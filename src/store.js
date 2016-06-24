let defaultStore = {};

export const createStore = (reducer, initalState) => {
  let state = initalState;
  let listeners = [];

  const getState = () => state;

  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach(l => l());
  }

  const subscribe = (listener) => {
    listeners.push(listener);

    return () => {
      listener.filter(l => l !== listener);
    }
  };

  dispatch({});

  return {
    getState,
    dispatch,
    subscribe
  }
}

export const combineReducers = (reducers) => {
  return (state = {}, action) => {
    return Object.keys(reducers).reduce((acc, r) => {
      acc[r] = reducers[r](state[r], action)
      return acc;
    }, {})
  }
}
