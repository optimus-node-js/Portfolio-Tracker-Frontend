// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { analytics } from './firebase-config';
import { logEvent } from "firebase/analytics";

logEvent(analytics, 'notification_received'); // Log a test event


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Firebase analytics will be initialized upon app start
console.log('Firebase Analytics initialized', analytics);
