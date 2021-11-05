import React from 'react';
import ReactDOM from 'react-dom';
import config from "./config/index.js"
import "./css/normalize.css"
import "./css/theme.scss"
import "./css/base.scss"
let {routes,axios} = config;
React.$axios = axios;
ReactDOM.render(
    routes(),
  document.getElementById('root')
);
