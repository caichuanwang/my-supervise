/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: ekko
 * @Date: 2021-03-02 18:22:06
 * @LastEditors: ekko
 * @LastEditTime: 2021-03-04 14:04:37
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import store from './store'
import './common/style/global.scss';
 
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App  />
        
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
