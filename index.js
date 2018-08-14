import React from 'react';
import ReactDOM from 'react-dom';
import Categories from './src/category/components/categories';
import data from './src/api.json';

ReactDOM.render(<Categories data={data}/>, document.getElementById('app'));
