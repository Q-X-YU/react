import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './mock'
import 'antd/dist/antd.css'
import 'antd-mobile/dist/antd-mobile.css'
import {BrowserRouter} from 'react-router-dom'
ReactDOM.render(
  <BrowserRouter>
  <App />
  </BrowserRouter>
    ,
  document.getElementById('root')
);


