import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../pages/containers/home';
import data from '../api.json';
/*IMPORTAMOS STORE*/
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from '../reducers/data';

const initialState = {
  data: {
    ...data,
  },
  search: [],
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

ReactDOM.render(
  <Provider store={store}>
    <Home/>
  </Provider>,
  document.getElementById('app')
);
