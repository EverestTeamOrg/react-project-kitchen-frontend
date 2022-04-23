import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store';

import {BrowserRouter} from 'react-router-dom';

import App from './components/App';

// TODO: to type
// const storeProp: any = { store };


// TODO: типизировать store и убрать ts-ignore
ReactDOM.render((
  <BrowserRouter>
    {/* @ts-ignore*/}
    <Provider store={store}>
      <App/>
    </Provider>
  </BrowserRouter>

), document.getElementById('root'));
