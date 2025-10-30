/**
 * ==============================================================================
 * LLHS Finance Club Website - Portfolio Page Component
 * ==============================================================================
 *
 * This component displays the club's investment portfolio performance.
 *
 * Authors: Alexander Alessi & Nicolas Alessi
 * Copyright (c) 2025 LLHS Finance Club. All rights reserved.
 */

import React from 'react';

const Portfolio = () => (
  <div className="space-y-8 p-6 bg-white rounded-2xl shadow-xl">
    <h2 className="text-4xl font-bold text-llhs-maroon border-b pb-3 border-llhs-gold">
      Our Investment Portfolio
    </h2>
    <p className="text-lg text-gray-700">
      A real investment portfolio — seeded with $4,000 from club members — is actively tracked and analyzed by the LLHS Finance Club. 
      Follow live performance and holdings below.
    </p>

    {/* Growth Graphic */}
    <div className="bg-gradient-to-r from-llhs-maroon to-llhs-gold p-1 rounded-full max-w-2xl mx-auto mb-6">
      <div className="bg-white py-4 px-8 rounded-full flex items-center justify-between relative overflow-hidden h-20">
        
        {/* Starting Point */}
        <div className="flex flex-col items-center z-10">
          <p className="text-xs font-medium text-gray-600 mb-1">Started</p>
          <p className="text-2xl font-bold text-llhs-maroon leading-none">$4,000</p>
        </div>

        {/* Progress Bar */}
        <div className="absolute left-0 top-0 h-full bg-llhs-gold/25 rounded-full animate-grow-to-end"></div>

        {/* Ending Point */}
        <div className="flex flex-col items-end z-10">
          <p className="text-xs font-medium text-gray-600 mb-1">Current <span className="font-semibold text-green-600">(+153.09%)</span></p>
          <p className="text-2xl font-bold text-llhs-maroon leading-none">$12,553.42</p>
        </div>
      </div>
    </div>

    {/* Last Updated */}
    <p className="text-center text-sm text-gray-500 italic">
      Last updated: October 2025
    </p>

    {/* Real Portfolio Table */}
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200 rounded-lg">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Symbol</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Name</th>
            <th className="px-4 py-3 text-right text-xs font-medium text-gray-700 uppercase tracking-wider">Quantity</th>
            <th className="px-4 py-3 text-right text-xs font-medium text-gray-700 uppercase tracking-wider">Market Value</th>
            <th className="px-4 py-3 text-right text-xs font-medium text-gray-700 uppercase tracking-wider">Cost Basis</th>
            <th className="px-4 py-3 text-right text-xs font-medium text-gray-700 uppercase tracking-wider">Unrealized Gain ($)</th>
            <th className="px-4 py-3 text-right text-xs font-medium text-gray-700 uppercase tracking-wider">Unrealized Gain (%)</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <tr className="hover:bg-gray-50">
            <td className="px-4 py-3 text-sm font-medium text-llhs-maroon">APLD</td>
            <td className="px-4 py-3 text-sm text-gray-700">APPLIED DIGITAL CORP</td>
            <td className="px-4 py-3 text-sm text-right text-gray-700">46.00000</td>
            <td className="px-4 py-3 text-sm text-right text-gray-700">$1,684.75</td>
            <td className="px-4 py-3 text-sm text-right text-gray-700">$372.95</td>
            <td className="px-4 py-3 text-sm text-right text-green-600">$1,311.80</td>
            <td className="px-4 py-3 text-sm text-right text-green-600">351.74%</td>
          </tr>
          <tr className="hover:bg-gray-50">
            <td className="px-4 py-3 text-sm font-medium text-llhs-maroon">BITF</td>
            <td className="px-4 py-3 text-sm text-gray-700">BITFARMS LTD F</td>
            <td className="px-4 py-3 text-sm text-right text-gray-700">401.00000</td>
            <td className="px-4 py-3 text-sm text-right text-gray-700">$2,199.73</td>
            <td className="px-4 py-3 text-sm text-right text-gray-700">$1,419.28</td>
            <td className="px-4 py-3 text-sm text-right text-green-600">$780.45</td>
            <td className="px-4 py-3 text-sm text-right text-green-600">54.99%</td>
          </tr>
          <tr className="hover:bg-gray-50">
            <td className="px-4 py-3 text-sm font-medium text-llhs-maroon">CIFR</td>
            <td className="px-4 py-3 text-sm text-gray-700">CIPHER MNG INC</td>
            <td className="px-4 py-3 text-sm text-right text-gray-700">41.00000</td>
            <td className="px-4 py-3 text-sm text-right text-gray-700">$836.22</td>
            <td className="px-4 py-3 text-sm text-right text-gray-700">$496.51</td>
            <td className="px-4 py-3 text-sm text-right text-green-600">$339.71</td>
            <td className="px-4 py-3 text-sm text-right text-green-600">68.42%</td>
          </tr>
          <tr className="hover:bg-gray-50">
            <td className="px-4 py-3 text-sm font-medium text-llhs-maroon">IREN</td>
            <td className="px-4 py-3 text-sm text-gray-700">IREN LTD F</td>
            <td className="px-4 py-3 text-sm text-right text-gray-700">119.00000</td>
            <td className="px-4 py-3 text-sm text-right text-gray-700">$7,832.72</td>
            <td className="px-4 py-3 text-sm text-right text-gray-700">$2,671.39</td>
            <td className="px-4 py-3 text-sm text-right text-green-600">$5,161.33</td>
            <td className="px-4 py-3 text-sm text-right text-green-600">193.21%</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Keep! Animation class */}
    <div className="hidden animate-grow-to-end"></div>
  </div>
);

export default Portfolio;