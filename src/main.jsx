/**
 * ==============================================================================
 * LLHS Finance Club Website (Vite/React SPA)
 * ==============================================================================
 *
 * This file is the main entry point for the React application.
 * It mounts the primary App component to the DOM.
 *
 * Authors: Alexander Alessi & Nicolas Alessi
 * Copyright (c) 2025 LLHS Finance Club. All rights reserved.
 *
 * NOTE: Imports global CSS (including Tailwind directives).
 */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
