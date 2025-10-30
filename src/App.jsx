/**
 * ==============================================================================
 * LLHS Finance Club Website - Main Application (App.jsx)
 * ==============================================================================
 *
 * This component acts as the root of the Single Page Application (SPA).
 * It manages the global page state and handles
 * the header, main content routing, and persistent footer.
 *
 * Authors: Alexander Alessi & Nicolas Alessi
 * Copyright (c) 2025 LLHS Finance Club. All rights reserved.
 *
 */

import React, { useState, useEffect } from 'react';
import About from './components/About';
import Join from './components/Join';
import Home from './components/Home';
import Portfolio from './components/Portfolio';  // ← NEW
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

/**
 * Main application component responsible for state management and layout.
 * Uses conditional rendering to switch between pages.
 */
const App = () => {
  const [currentPage, setCurrentPage] = useState('Home');

  // Reset scroll position when currentPage changes
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top
  }, [currentPage]); // Trigger effect when currentPage changes

  // Navigation component
  const Header = () => {
    const navItems = ['Home', 'About', 'Join', 'Portfolio'];
    return (
      <header className="bg-llhs-maroon shadow-xl sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row justify-between items-center">
          
          {/* Clickable Logo */}
          <button
            onClick={() => setCurrentPage('Home')}
            className="text-3xl font-extrabold tracking-tight text-llhs-gold mb-3 sm:mb-0 hover:text-llhs-gold/80 transition-colors"
          >
            LLHS Finance Club
          </button>

          <nav className="flex space-x-3 sm:space-x-6">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => setCurrentPage(item)}
                className={`
                  text-lg font-medium py-1 px-3 rounded-md transition-colors duration-200
                  ${currentPage === item
                    ? 'text-llhs-gold border-b-2 border-llhs-gold'
                    : 'text-white hover:text-llhs-gold/70'
                  }
                `}
              >
                {item}
              </button>
            ))}
          </nav>
        </div>
      </header>
    );
  };

  // Function to render the correct page component
  const renderPage = () => {
    switch (currentPage) {
      case 'About':
        return <About />;
      case 'Join':
        return <Join />;
      case 'Portfolio':
        return <Portfolio />;  // ← NEW
      case 'Home':
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 font-sans">
      <Header />

      <main className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 flex-grow w-full">
        {renderPage()}
      </main>

      <footer className="bg-llhs-maroon text-white p-6 mt-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-center md:text-left">
            
            {/* Copyright */}
            <div className="flex justify-center md:justify-start">
              <p className="text-llhs-gold">
                © {new Date().getFullYear()} LLHS Finance Club. Go Knights!
              </p>
            </div>

            {/* Instagram */}
            <div className="flex justify-center">
              <a
                href="https://www.instagram.com/las_lomas_finance_club/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-llhs-gold hover:text-white transition-colors duration-200"
              >
                <FontAwesomeIcon icon={faInstagram} className="text-2xl mr-2" />
                <span className="font-medium">@las_lomas_finance_club</span>
              </a>
            </div>

            {/* GitHub */}
            <div className="flex justify-center md:justify-end">
              <a
                href="https://github.com/nicolasalessi/llhsfinance"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-llhs-gold hover:text-white transition-colors duration-200"
              >
                <FontAwesomeIcon icon={faGithub} className="text-2xl mr-2" />
                <span className="font-medium">Fork our code</span>
              </a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default App;