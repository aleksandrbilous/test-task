import React from 'react';
import { render } from 'react-dom';

import App from './App';
import routes from './routes';

const appEl = document.querySelector('#app');
const renderApp = (Component, appRoutes) => {
  render(
    <Component routes={appRoutes()} />, appEl);
};

renderApp(App, routes);
