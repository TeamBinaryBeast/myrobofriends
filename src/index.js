import React from 'react'; //Robot that create doms
import ReactDOM from 'react-dom'; //Dom websites(do all)
import './index.css'; //where it is
import App from './containers/App.js';
import * as serviceWorker from './serviceWorker';
import 'tachyons';


ReactDOM.render(
  <App />
  ,document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
