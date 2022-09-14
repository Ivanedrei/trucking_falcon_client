import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { Trucking } from './components/Trucking';
import { BrowserRouter as Router } from 'react-router-dom';

// ReactDOM.render(
const root = createRoot(document.getElementById("root"))

root.render(
  < React.StrictMode >
    <Router>
      <Trucking />
    </Router>
  </React.StrictMode >
);
