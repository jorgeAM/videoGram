import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../pages/containers/home';
import data from '../api.json';
/*IMPORTAMOS STORE*/
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const initialState = {
  data: {
    ...data,
  },
};

const store = createStore(
  (state) => state,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

ReactDOM.render(
  <Provider store={store}>
    <Home/>
  </Provider>,
  document.getElementById('app')
);
