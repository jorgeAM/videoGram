import React from 'react';
import ReactDOM from 'react-dom';
import Playlist from './src/playlist/components/playlist';
import data from './src/api.json';

ReactDOM.render(<Playlist data={data}/>, document.getElementById('app'));
