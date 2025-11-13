/**
 * ==============================================================================
 * LLHS Finance Club Website - Header Component (Header.jsx)
 * ==============================================================================
 *
 * Persistent header.
 *
 * Authors: Alexander Alessi & Nicolas Alessi
 * Copyright (c) 2025 LLHS Finance Club. All rights reserved.
 *
 */

import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = ['About', 'Join', 'Speakers', 'Portfolio'];

  // Determine current page from URL
  const currentPage = {
    '/': 'Home',
    '/about': 'About',
    '/join': 'Join',
    '/speakers': 'Speakers',
    '/portfolio': 'Portfolio',
  }[location.pathname] || 'Home';

  // Navigate to page
  const goTo = (page) => {
    const paths = {
      Home: '/',
      About: '/about',
      Join: '/join',
      Speakers: '/speakers',
      Portfolio: '/portfolio',
    };
    navigate(paths[page]);
  };

  return (
    <header className="bg-llhs-maroon shadow-xl sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row justify-between items-center">
        
        {/* Logo */}
        <button
          onClick={() => goTo('Home')}
          className="text-3xl font-extrabold tracking-tight text-llhs-gold mb-3 sm:mb-0 hover:text-llhs-gold/80 transition-colors"
        >
          LLHS Finance Club
        </button>

        {/* Nav Items */}
        <nav className="flex space-x-3 sm:space-x-6">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => goTo(item)}
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

export default Header;