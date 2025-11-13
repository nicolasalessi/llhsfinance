/**
 * ==============================================================================
 * LLHS Finance Club Website - Footer Component (Footer.jsx)
 * ==============================================================================
 *
 * Persistent footer.
 *
 * Authors: Alexander Alessi & Nicolas Alessi
 * Copyright (c) 2025 LLHS Finance Club. All rights reserved.
 *
 */

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

/**
 * Footer component displayed on all pages.
 */
const Footer = () => {
  return (
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
  );
};

export default Footer;