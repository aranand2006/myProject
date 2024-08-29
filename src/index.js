import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap';
import { BrowserRouter as Router } from 'react-router-dom';
import NavigationComponent from './components/bs-nav/NavigationComponent';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='container'>
  <Router>
      <NavigationComponent />
  </Router>
</div>
);