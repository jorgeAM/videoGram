import React from 'react';
import ReactDOM from 'react-dom';
import Category from './src/category/components/category';
import data from './src/api.json';

ReactDOM.render(<Category data={data}/>, document.getElementById('app'));
