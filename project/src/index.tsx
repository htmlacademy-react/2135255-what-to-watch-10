import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
let data : {
    DateInit: Date;
    NameFilms:string;
}={
  DateInit: new Date(),
  NameFilms: "Какой то фильм"
}
root.render(
  <React.StrictMode>
    <App FilmTypes={data} />
  </React.StrictMode>,
);
