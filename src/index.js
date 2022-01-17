import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Navbar, Header, Home, Contact, Quote} from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Header />
    <Quote />
    <Home />
    <Contact />
  
  </React.StrictMode>,
  document.getElementById('greenTee')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
