let defaultStore = {};

const createStore = (key = 'store') => {
  let state = defaultStore[key] || [];

  const getState = () => state;

  const insert = (data) => {
    let newDatas = [...state, ...data];
    state = defaultStore[key] = newDatas;
    return this;
  }

  return {
    getState,
    insert
  }
}

export default createStore;
