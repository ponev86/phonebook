import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import reportWebVitals from './reportWebVitals';
import AppRouter from './router';
import { Provider } from 'react-redux';
import configureStore from './store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={configureStore()}>
      <AppRouter />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
