import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { configureStore } from './store/store';

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  window.gs = store.getState;
  const rootEl = document.getElementById("root");
  ReactDOM.render(<App store={store}/>, rootEl);
});
