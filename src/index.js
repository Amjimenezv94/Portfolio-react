import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './assets/CSS/index.css';
import App from './App';
import Carousel from './component/Carousel.jsx'

ReactDOM.render(
  <React.StrictMode>
    <div>
    <App />

    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

