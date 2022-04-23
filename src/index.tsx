import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store, history} from './store';

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import App from './components/App';

// TODO: to type
const storeProp: any = { store };

ReactDOM.render((
  <BrowserRouter>
    <Provider store={store}>
      <App/>
    </Provider>
  </BrowserRouter>

), document.getElementById('root'));
