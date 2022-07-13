import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { IFilm } from './types/TypeFilms';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
const FILMS:IFilm = { name:'Test', date: new Date()};
root.render(
  <React.StrictMode>
    <App {...FILMS} />
  </React.StrictMode>,
);
