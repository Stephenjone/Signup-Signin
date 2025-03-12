// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './Components/Signup';
import Signin from './Components/Signin';
import Database from './Components/Data';
import Home from './Components/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/data" element={<Database />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  </Router>
);
