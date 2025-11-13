/**
 * ==============================================================================
 * LLHS Finance Club Website - 404 Page
 * ==============================================================================
 *
 * Display a friendly 404 for non-existent routes.
 * Positioned near the top with proper spacing from the header.
 *
 * Authors: Alexander Alessi & Nicolas Alessi
 * Copyright (c) 2025 LLHS Finance Club. All rights reserved.
 */

import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <main className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 flex-grow">
    <div className="bg-white p-8 rounded-2xl shadow-xl text-center max-w-md mx-auto mt-8">
      <h1 className="text-6xl font-bold text-llhs-maroon mb-4">404</h1>
      <p className="text-xl text-gray-700 mb-6">
        Oops! We couldn't find that page.
      </p>
      <Link
        to="/"
        className="inline-block bg-llhs-maroon text-white font-bold py-3 px-8 rounded-lg hover:bg-llhs-maroon/90 transition-colors duration-200"
      >
        Back to Home
      </Link>
    </div>
  </main>
);

export default NotFound;