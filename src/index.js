import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import {render} from "react-dom"
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <div>Our App</div>
    <App/>
  </>
);

reportWebVitals();