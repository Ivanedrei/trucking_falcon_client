import React from 'react';
import { createRoot } from 'react-dom/client';
import { Trucking } from './components/Trucking';
import { BrowserRouter as Router } from "react-router-dom";
import { createBrowserHistory } from "history";

const customHistory = createBrowserHistory();

const root = createRoot(document.getElementById("root"))

root.render(
  < Router history={customHistory} >
    <Trucking />
  </Router >
);
