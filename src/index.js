import React from 'react';
import ReactDOM from 'react-dom';
import './Assets/index.css';
import * as serviceWorker from './serviceWorker';
import Containers from './Containers/Index.js';
import SharedAlbum from './Containers/SharedAlbum.js';

ReactDOM.render(<Containers />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
