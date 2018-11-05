import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Videos from '../pages/containers/videos';
import Header from '../pages/components/header';
import Home from '../pages/components/home';
import data from '../api.json';
/*IMPORTAMOS STORE*/
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from '../reducers/data';
/*REACT-ROUTER*/
import { BrowserRouter as Router, Route } from 'react-router-dom';

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
  <Router>
    <Provider store={store}>
      <Fragment>
        <Header/>
        <Route exact path='/' component={Home}/>
        <Route exact path='/videos' component={Videos}/>
        <Route exact path='/contacto' component={Home}/>
        <Route exact path='/perfil' component={Home}/>
      </Fragment>
    </Provider>
  </Router>,
  document.getElementById('app')
);
