/**
 * ==============================================================================
 * LLHS Finance Club Website - Portfolio Page Component
 * ==============================================================================
 *
 * This component displays the club's investment portfolio performance.
 * Data is loaded from public/data/portfolio.json.
 *
 * Authors: Alexander Alessi & Nicolas Alessi
 * Copyright (c) 2025 LLHS Finance Club. All rights reserved.
 */

import React, { useState, useEffect } from 'react';

const Portfolio = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const response = await fetch('/data/portfolio.json');
        if (!response.ok) throw new Error('Failed to load portfolio');
        const json = await response.json();
        setData(json);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchPortfolio();
  }, []);

  if (loading) {
    return (
      <div className="space-y-8 p-6 bg-white rounded-2xl shadow-xl text-center">
        <h2 className="text-4xl font-bold text-llhs-maroon border-b pb-3 border-llhs-gold">
          Our Investment Portfolio
        </h2>
        <p className="text-gray-600">Loading portfolio data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="space-y-8 p-6 bg-white rounded-2xl shadow-xl text-center">
        <h2 className="text-4xl font-bold text-llhs-maroon border-b pb-3 border-llhs-gold">
          Our Investment Portfolio
        </h2>
        <p className="text-red-600">Error: {error}</p>
      </div>
    );
  }

  const { growth, portfolio } = data;

  return (
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
            <p className="text-2xl font-bold text-llhs-maroon leading-none">
              ${growth.start.toLocaleString(undefined, { minimumFractionDigits: 0 })}
            </p>
          </div>

          {/* Progress Bar */}
          <div className="absolute left-0 top-0 h-full bg-llhs-gold/25 rounded-full animate-grow-to-end"></div>

          {/* Ending Point */}
          <div className="flex flex-col items-end z-10">
            <p className="text-xs font-medium text-gray-600 mb-1">
              Current <span className="font-semibold text-green-600">(+{growth.gainPercent}%)</span>
            </p>
            <p className="text-2xl font-bold text-llhs-maroon leading-none">
              ${growth.current.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </p>
          </div>
        </div>
      </div>

      {/* Last Updated */}
      <p className="text-center text-sm text-gray-500 italic">
        Last updated: {growth.lastUpdated}
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
            {portfolio.map((stock, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-4 py-3 text-sm font-medium text-llhs-maroon">{stock.symbol}</td>
                <td className="px-4 py-3 text-sm text-gray-700">{stock.name}</td>
                <td className="px-4 py-3 text-sm text-right text-gray-700">
                  {stock.quantity.toLocaleString(undefined, { minimumFractionDigits: 5, maximumFractionDigits: 5 })}
                </td>
                <td className="px-4 py-3 text-sm text-right text-gray-700">
                  ${stock.marketValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </td>
                <td className="px-4 py-3 text-sm text-right text-gray-700">
                  ${stock.costBasis.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </td>
                <td className="px-4 py-3 text-sm text-right text-green-600">
                  ${stock.gainDollars.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </td>
                <td className="px-4 py-3 text-sm text-right text-green-600">
                  {stock.gainPercent.toFixed(2)}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Keep animation class */}
      <div className="hidden animate-grow-to-end"></div>
    </div>
  );
};

export default Portfolio;