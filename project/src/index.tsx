import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { FILMS } from './Moq/Films-List';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App Films={FILMS} />
  </React.StrictMode>,
);
