// Import something here to use it app-wide

// Importing React which allows us to use JSX
import React from 'react';
// This allows us to mount our React application inside the browser
import ReactDOM from 'react-dom';
// Loads the main CSS file at the highest level of our application
import './index.css';
// React Component - Mount this component at the top level
import App from './App';
// Production caching
import * as serviceWorker from './serviceWorker';

// ReactDOM.render takes 2 params
  // 1) Component to mount
  // 2) The element in the DOM to mount the component to
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
