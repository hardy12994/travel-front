import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import map from './mapStore';

const store = createStore(map);

ReactDOM.render( // eslint-disable-line function-paren-newline
  <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>, document.getElementById('app'),
); // eslint-disable-line function-paren-newline

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
