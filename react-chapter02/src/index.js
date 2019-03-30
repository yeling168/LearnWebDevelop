import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import '../src/theme/index.css';
//import App from './App';
import Bbs from './Bbs';
import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Bbs />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
