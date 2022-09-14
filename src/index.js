import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Trucking } from './components/Trucking';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Trucking />
    </Router>
  </React.StrictMode >,
  document.getElementById("root")
);

