import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './services/store';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { BrowserRouter } from "react-router-dom";
import styled from 'styled-components';
import { Global } from './components/StyledComponents/globalStyles';
import App from './components/app';
import { setTokenAxios } from './api';

const token = localStorage.getItem('jwt');
setTokenAxios(token ? token : "");

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter basename="/">
      <Global />
      <App />
    </BrowserRouter>
  </Provider>

), document.getElementById('root'));

