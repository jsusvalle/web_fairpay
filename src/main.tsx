import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/app';

import { worker } from 'infrastructure/tests/browser';

worker.start({ onUnhandledRequest: 'bypass' });

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
