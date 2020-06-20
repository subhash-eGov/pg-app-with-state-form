import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Projects from "./components/Projects/Projects.js";
import {BrowserRouter as Router,
Link,
Route,
Switch} from "react-router-dom";

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/projects">
          <Projects/>
        </Route>
        <Route path="/">
          <App/>
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
