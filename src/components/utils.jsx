/**
 * ==============================================================================
 * LLHS Finance Club Website - Utility Components (utils.jsx)
 * ==============================================================================
 *
 * This file contains reusable, presentational components (like Button and StatCard)
 * used across multiple pages of the application. They primarily handle styling
 * and visual structure.
 *
 * Authors: Alexander Alessi & Nicolas Alessi
 * Copyright (c) 2025 LLHS Finance Club. All rights reserved.
 *
 * @module Utilities
 */

import React from 'react';

/**
 * Small reusable card component for displaying key statistics or values.
 * @param {string} title - Card title.
 * @param {string} description - Card description.
 */
export const StatCard = ({ title, description }) => (
    <div className="p-6 bg-white rounded-xl shadow-lg border-b-4 border-llhs-maroon transition-transform hover:shadow-xl hover:scale-[1.02]">
      <h4 className="text-xl font-bold text-llhs-maroon mb-2">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
);