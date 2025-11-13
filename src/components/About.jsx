/**
 * ==============================================================================
 * LLHS Finance Club Website - About Page Component
 * ==============================================================================
 *
 * Displays club mission, pillars, and a dynamic, responsive leadership grid.
 * Leaders are loaded from public/data/leaders.json.
 *
 * Authors: Alexander Alessi & Nicolas Alessi
 * Copyright (c) 2025 LLHS Finance Club. All rights reserved.
 */

import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

/**
 * @module About
 */
const About = () => {
  const [leaders, setLeaders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Load leaders from JSON
  useEffect(() => {
    const fetchLeaders = async () => {
      try {
        const response = await fetch('/data/leaders.json');
        if (!response.ok) throw new Error('Failed to load leaders');
        const data = await response.json();
        setLeaders(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchLeaders();
  }, []);

  return (
    <div className="space-y-8 p-6 bg-white rounded-2xl shadow-xl">
      <h2 className="text-4xl font-bold text-llhs-maroon border-b pb-3 border-llhs-gold">
        About the Club
      </h2>
      <p className="text-lg text-gray-700">
        Founded in 2024, the LLHS Finance Club was created by students who saw a gap in
        traditional education regarding personal finance and investment strategy. We
        operate as a practical, project-based learning environment where members
        actively participate in mock portfolio management, economic forecasting, and
        guest speaker sessions.
      </p>

      {/* Pillars */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-llhs-maroon mb-4">Our Pillars</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-lg shadow-md bg-llhs-maroon border border-llhs-gold">
            <p className="font-bold text-lg text-llhs-gold mb-1">Market Analysis</p>
            <p className="text-gray-200 text-sm">
              Weekly deep dives into current events and stock movements, analyzing company performance and economic trends.
            </p>
          </div>

          <div className="p-4 rounded-lg shadow-md bg-llhs-maroon border border-llhs-gold">
            <p className="font-bold text-lg text-llhs-gold mb-1">Personal Finance</p>
            <p className="text-gray-200 text-sm">
              Workshops covering essential life skills like budgeting, understanding credit, and long-term retirement planning.
            </p>
          </div>

          <div className="p-4 rounded-lg shadow-md bg-llhs-maroon border border-llhs-gold">
            <p className="font-bold text-lg text-llhs-gold mb-1">Investment Portfolio</p>
            <p className="text-gray-200 text-sm">
              Managing a simulated fund, competing in challenges, and practicing real-world asset allocation.
            </p>
          </div>

          <div className="p-4 rounded-lg shadow-md bg-llhs-maroon border border-llhs-gold">
            <p className="font-bold text-lg text-llhs-gold mb-1">Community Outreach</p>
            <p className="text-gray-200 text-sm">
              Teaching foundational financial basics to high school students to foster financial literacy.
            </p>
          </div>
        </div>
      </div>

      <p className="text-lg text-gray-700 pt-4 border-t mt-8">
        We strive to create a sophisticated, yet accessible, environment for all
        students. We welcome everyone, from beginners who can't tell a stock from a
        bond, to seasoned investors looking for peer challenge.
      </p>

      {/* Leadership Team */}
      <div className="mt-8 p-6 bg-gray-50 rounded-2xl shadow-md border border-llhs-gold">
        <h3 className="text-2xl font-semibold text-llhs-maroon mb-4">Leadership Team</h3>
        <p className="text-lg text-gray-700 mb-6">
          Our leaders are passionate about personal finance and investing. Each has
          been actively managing their own portfolios for years, building real-world
          experience in market analysis, risk management, and long-term wealth
          strategy.
        </p>

        {loading ? (
          <p className="text-center text-gray-600">Loading leaders...</p>
        ) : error ? (
          <p className="text-center text-red-600">Error: {error}</p>
        ) : (
          <div className="space-y-8">
            {leaders.reduce((rows, leader, index) => {
              if (index % 3 === 0) rows.push([]);
              rows[rows.length - 1].push(leader);
              return rows;
            }, []).map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="flex justify-center gap-6 flex-wrap"
              >
                {row.map((leader, colIndex) => (
                  <div
                    key={colIndex}
                    className="flex flex-col items-center text-center w-full max-w-xs"
                  >
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-llhs-gold mb-3">
                      <img
                        src={leader.image}
                        alt={leader.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex items-center justify-center gap-1">
                      <p className="font-bold text-lg text-llhs-maroon">{leader.name}</p>
                      <a
                        href={leader.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${leader.name} LinkedIn`}
                      >
                        <FontAwesomeIcon icon={faLinkedin} className="text-llhs-maroon text-xl" />
                      </a>
                    </div>

                    <p className="text-gray-600 text-sm">{leader.title}</p>

                    <p className="mt-3 p-3 bg-white rounded-lg border border-llhs-gold/30 shadow-sm w-full text-xs italic text-gray-700 leading-relaxed">
                      {leader.focus}
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Faculty Sponsor – Hardcoded */}
      <div className="mt-8 p-6 bg-gray-50 rounded-2xl shadow-md border border-llhs-gold">
        <h3 className="text-2xl font-semibold text-llhs-maroon mb-4">Our Sponsor</h3>
        <p className="text-lg text-gray-700 mb-6">
          We’re grateful for the support of our faculty sponsor who makes our club possible.
        </p>

        <div className="flex flex-col items-center text-center max-w-md mx-auto">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-llhs-gold mb-3">
            <img
              src="/assets/headshots/headshot-mr-bremer.jpg"
              alt="Mr. Bremer"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="font-bold text-lg text-llhs-maroon">Mr. Bremer</p>
          <p className="text-gray-600 text-sm">Economics Teacher & Faculty Sponsor</p>
          <p className="mt-3 text-sm text-gray-700 leading-relaxed">
            Mr. Bremer generously allows us to use his classroom for meetings and
            events. As our economics teacher, he helps break down complex financial
            concepts into clear, actionable insights that inspire our members.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;