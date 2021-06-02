import React from "react";
import ReactDOM from "react-dom";
//import { Provider } from 'react-redux';
//import { combineReducers, createStore } from 'redux';
import ProductsProvider from "./context/products-context.js";

import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import configureStore from "./hooks-store/product-store";

//import productReducer from "./store/reducers/products";

//Replacing REDUX with reactHooks ==> New learnings...

/*
const rootReducer = combineReducers({
  shop: productReducer
});

const store = createStore(rootReducer);
*/

/*ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
  */

configureStore();

ReactDOM.render(
  //Using React HOOKS to replace REDUX & Context API
  //<ProductsProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  //</ProductsProvider>
  document.getElementById("root")
);
