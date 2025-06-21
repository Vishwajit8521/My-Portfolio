import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';


import '@fontsource/poppins';
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/700.css';


const container = document.getElementById('root');
const root = createRoot(container);


root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);