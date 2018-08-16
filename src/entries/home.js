import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../pages/containers/home';
import data from '../api.json';

ReactDOM.render(<Home data={data}/>, document.getElementById('app'));
