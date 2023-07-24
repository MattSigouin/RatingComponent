import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Rating } from './components/Rating';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Rating />
  </React.StrictMode>
);


