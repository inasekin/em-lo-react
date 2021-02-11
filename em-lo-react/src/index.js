import React from 'react';
import ReactDOM from 'react-dom';
import {ServiceProvider} from './context-service';
import {AreaProvider} from './context';
import App from './components/app';
import {BrowserRouter as Router} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <ServiceProvider>
    <AreaProvider>
        <Router>
          <App/>
        </Router>
      </AreaProvider>
  </ServiceProvider>,

  document.getElementById('react-app'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();