/**
 * ==============================================================================
 * LLHS Finance Club Website - Main Application (App.jsx)
 * ==============================================================================
 *
 * Root SPA with React Router.
 *
 * Authors: Alexander Alessi & Nicolas Alessi
 * Copyright (c) 2025 LLHS Finance Club. All rights reserved.
 */

import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import About from './components/About';
import Join from './components/Join';
import Home from './components/Home';
import Speakers from './components/Speakers';
import Portfolio from './components/Portfolio';
import Header from './components/Header';
import Footer from './components/Footer';
import NotFound from './components/NotFound';

const App = () => {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 font-sans">
      <Header />
      <main className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 flex-grow w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/join" element={<Join />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;