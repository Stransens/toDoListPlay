import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
import reducer from "src/store/reducer";
import { createStore } from 'redux';

const store = createStore(reducer)

ReactDOM.render(
  <React.StrictMode>
    <Provider {...{ store }} >
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
