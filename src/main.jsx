/**
 * ==============================================================================
 * LLHS Finance Club Website (Vite/React SPA)
 * ==============================================================================
 *
 * This file is the main entry point for the React application.
 * It mounts the primary App component inside BrowserRouter for URL routing.
 *
 * Authors: Alexander Alessi & Nicolas Alessi
 * Copyright (c) 2025 LLHS Finance Club. All rights reserved.
 *
 * NOTE: Imports global CSS (including Tailwind directives).
 */

import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);