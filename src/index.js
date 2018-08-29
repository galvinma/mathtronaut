import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

// redux
import store from './Store/store'

// css
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import App from './App'


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
document.getElementById('root'));
