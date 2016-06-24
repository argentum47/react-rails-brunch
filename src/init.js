import React from "react";
import ReactDOM from "react-dom";
import Grid from "./components/Grid.react.jsx"
import { createStore, combineReducers } from "./store";

function productList(state = [], action) {
  if(action.type == 'GET_PRODUCTS')
    return [...state, ...action.payload.products]
  else if(action.type == 'SEARCH_PRODUCTS')
    return [...action.payload.products]
  return state;
}

function page(state = 0, action) {
  if(action.type == 'GET_PRODUCTS')
    return action.page;
  else if(action.type == 'SEARCH_PRODUCTS')
    return 0;
  return state;
}

function totalPages(state = 1, action) {
  if(['GET_PRODUCTS', 'SEARCH_PRODUCTS'].includes(action.type))
    return action.payload.total_pages;

  return state;
}

const productApp = combineReducers({
  productList: productList,
  totalPages: totalPages,
  page: page
});

const store = createStore(productApp, {});

const render = () => {
  let state = store.getState();
  ReactDOM.render(
    <Grid
    tableHeight="300"
    elementHeight="40"
    page={state.page}
    products={state.productList}
    totalPages={state.totalPages}
    dispatch={store.dispatch}/>,
    document.querySelector("#products_container")
  );
}

store.subscribe(render);
render()
