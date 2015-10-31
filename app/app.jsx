import './favicon.ico';
import './index.html';
import 'babel-core/polyfill';
import './scss/app.scss';

import React from 'react';
import App from './components/App/App';

React.render(
  <App />,
  document.getElementById('app')
);
