/**
 * ==============================================================================
 * LLHS Finance Club Website - About Page Component
 * ==============================================================================
 *
 * This component displays detailed information about the club's mission,
 * founding, and core pillars (Market Analysis, Personal Finance, etc.).
 *
 * Authors: Alexander Alessi & Nicolas Alessi
 * Copyright (c) 2025 LLHS Finance Club. All rights reserved.
 */

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

/**
 * @module About
 * @param {object} props - The component props.
 */
const About = () => (
  <div className="space-y-8 p-6 bg-white rounded-2xl shadow-xl">
    <h2 className="text-4xl font-bold text-llhs-maroon border-b pb-3 border-llhs-gold">About the Club</h2>
    <p className="text-lg text-gray-700">
      Founded in 2024, the LLHS Finance Club was created by students who saw a gap in traditional education regarding personal finance and investment strategy. We operate as a practical, project-based learning environment where members actively participate in mock portfolio management, economic forecasting, and guest speaker sessions.
    </p>

    <div className="space-y-4">
      <h3 className="text-2xl font-semibold text-llhs-maroon mb-4">Our Pillars</h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Pillar 1: Market Analysis */}
        <div className="p-4 rounded-lg shadow-md bg-llhs-maroon border border-llhs-gold">
          <p className="font-bold text-lg text-llhs-gold mb-1">Market Analysis</p>
          <p className="text-gray-200 text-sm">Weekly deep dives into current events and stock movements, analyzing company performance and economic trends.</p>
        </div>
        
        {/* Pillar 2: Personal Finance */}
        <div className="p-4 rounded-lg shadow-md bg-llhs-maroon border border-llhs-gold">
          <p className="font-bold text-lg text-llhs-gold mb-1">Personal Finance</p>
          <p className="text-gray-200 text-sm">Workshops covering essential life skills like budgeting, understanding credit, and long-term retirement planning.</p>
        </div>

        {/* Pillar 3: Investment Portfolio */}
        <div className="p-4 rounded-lg shadow-md bg-llhs-maroon border border-llhs-gold">
          <p className="font-bold text-lg text-llhs-gold mb-1">Investment Portfolio</p>
          <p className="text-gray-200 text-sm">Managing a simulated fund, competing in challenges, and practicing real-world asset allocation.</p>
        </div>

        {/* Pillar 4: Community Outreach */}
        <div className="p-4 rounded-lg shadow-md bg-llhs-maroon border border-llhs-gold">
          <p className="font-bold text-lg text-llhs-gold mb-1">Community Outreach</p>
          <p className="text-gray-200 text-sm">Teaching foundational financial basics to high school students to foster financial literacy.</p>
        </div>
      </div>
    </div>

    <p className="text-lg text-gray-700 pt-4 border-t mt-8">
      We strive to create a sophisticated, yet accessible, environment for all students. We welcome everyone, from beginners who can't tell a stock from a bond, to seasoned investors looking for peer challenge.
    </p>

    <div className="mt-8 p-6 bg-gray-50 rounded-2xl shadow-md border border-llhs-gold">
      <h3 className="text-2xl font-semibold text-llhs-maroon mb-4">Leadership Team</h3>
      <p className="text-lg text-gray-700 mb-6">
        Our leaders are passionate about personal finance and investing. Each has been actively managing their own portfolios for years, building real-world experience in market analysis, risk management, and long-term wealth strategy.
      </p>
      
      <div className="space-y-8">

        {/* Top Row: 3 Leaders */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          
          {/* Mason Grant */}
          <div className="flex flex-col items-center text-center">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-llhs-gold mb-3">
              <img src="/assets/headshots/headshot-mason.jpeg" alt="Mason Grant" className="w-full h-full object-cover" />
            </div>
            <div className="flex items-center justify-center gap-1">
              <p className="font-bold text-lg text-llhs-maroon">Mason Grant</p>
              <a href="https://www.linkedin.com/in/mason-grant-916970321/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className="text-llhs-maroon text-xl" />
              </a>
            </div>
            <p className="text-gray-600 text-sm">President, Investment Lead</p>

            {/* Investment Focus – Mason Grant */}
            <div className="mt-3 p-3 bg-white rounded-lg border border-llhs-gold/30 shadow-sm w-full max-w-xs">
              <p className="text-xs italic text-gray-700 leading-relaxed">
                Leading research into <span className="font-semibold text-llhs-maroon">data center infrastructure and AI compute demand</span>.
              </p>
            </div>
          </div>

          {/* Nico Alessi */}
          <div className="flex flex-col items-center text-center">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-llhs-gold mb-3">
              <img src="/assets/headshots/headshot-nico.png" alt="Nico Alessi" className="w-full h-full object-cover" />
            </div>
            <div className="flex items-center justify-center gap-1">
              <p className="font-bold text-lg text-llhs-maroon">Nico Alessi</p>
              <a href="https://www.linkedin.com/in/nicolas-alessi-05111b21/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className="text-llhs-maroon text-xl" />
              </a>
            </div>
            <p className="text-gray-600 text-sm">Head of Development</p>

            {/* Investment Focus – Nico Alessi */}
            <div className="mt-3 p-3 bg-white rounded-lg border border-llhs-gold/30 shadow-sm w-full max-w-xs">
              <p className="text-xs italic text-gray-700 leading-relaxed">
                Exploring <span className="font-semibold text-llhs-maroon">next-gen power</span> like advanced batteries, solar tech, and nuclear energy.
              </p>
            </div>
          </div>

          {/* Alex Alessi */}
          <div className="flex flex-col items-center text-center">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-llhs-gold mb-3">
              <img src="/assets/headshots/headshot-alex.png" alt="Alex Alessi" className="w-full h-full object-cover" />
            </div>
            <div className="flex items-center justify-center gap-1">
              <p className="font-bold text-lg text-llhs-maroon">Alex Alessi</p>
              <a href="https://www.linkedin.com/in/alex-alessi-ab511a21/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className="text-llhs-maroon text-xl" />
              </a>
            </div>
            <p className="text-gray-600 text-sm">Head of Recruiting</p>

            {/* Investment Focus – Alex Alessi */}
            <div className="mt-3 p-3 bg-white rounded-lg border border-llhs-gold/30 shadow-sm w-full max-w-xs">
              <p className="text-xs italic text-gray-700 leading-relaxed">
                Interested in <span className="font-semibold text-llhs-maroon">real estate ETFs and REITs</span> to own pieces of apartments, malls, and warehouses without buying a whole building.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Row: 2 Leaders */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          
          {/* Stephen Cordano */}
          <div className="flex flex-col items-center text-center">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-llhs-gold mb-3">
              <img src="/assets/headshots/headshot-stephen.jpg" alt="Stephen Cordano" className="w-full h-full object-cover" />
            </div>
            <div className="flex items-center justify-center gap-1">
              <p className="font-bold text-lg text-llhs-maroon">Stephen Cordano</p>
              <a href="https://www.linkedin.com/in/stephen-cordano-372bb0394/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className="text-llhs-maroon text-xl" />
              </a>
            </div>
            <p className="text-gray-600 text-sm">Head of Research</p>

            {/* Investment Focus – Stephen Cordano */}
            <div className="mt-3 p-3 bg-white rounded-lg border border-llhs-gold/30 shadow-sm w-full max-w-xs">
              <p className="text-xs italic text-gray-700 leading-relaxed">
                Studying <span className="font-semibold text-llhs-maroon">cybersecurity companies</span> that keep computers and data safe from hackers.
              </p>
            </div>
          </div>

          {/* Sameer Raj */}
          <div className="flex flex-col items-center text-center">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-llhs-gold mb-3">
              <img src="/assets/headshots/headshot-sameer.jpeg" alt="Sameer Raj" className="w-full h-full object-cover" />
            </div>
            <div className="flex items-center justify-center gap-1">
              <p className="font-bold text-lg text-llhs-maroon">Sameer Raj</p>
              <a href="https://www.linkedin.com/in/sameer-raj-94a983336/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className="text-llhs-maroon text-xl" />
              </a>
            </div>
            <p className="text-gray-600 text-sm">VP, Marketing</p>

            {/* Investment Focus – Sameer Raj */}
            <div className="mt-3 p-3 bg-white rounded-lg border border-llhs-gold/30 shadow-sm w-full max-w-xs">
              <p className="text-xs italic text-gray-700 leading-relaxed">
                Focused on <span className="font-semibold text-llhs-maroon">AI tools that help businesses work smarter</span>, like chatbots and smart software.
              </p>
            </div>
          </div>
        </div>

      </div>
      
    </div>

    {/* Our Sponsor */}
    <div className="mt-8 p-6 bg-gray-50 rounded-2xl shadow-md border border-llhs-gold">
      <h3 className="text-2xl font-semibold text-llhs-maroon mb-4">Our Sponsor</h3>
      <p className="text-lg text-gray-700 mb-6">
        We’re grateful for the support of our faculty sponsor who makes our club possible.
      </p>

      <div className="flex flex-col items-center text-center max-w-md mx-auto">
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-llhs-gold mb-3">
          <img 
            src="/assets/headshots/headshot-mr-bremer.jpg" 
            alt="Mr. Bremmer" 
            className="w-full h-full object-cover" 
          />
        </div>
        <p className="font-bold text-lg text-llhs-maroon">Mr. Bremer</p>
        <p className="text-gray-600 text-sm">Economics Teacher & Faculty Sponsor</p>
        <p className="mt-3 text-sm text-gray-700 leading-relaxed">
          Mr. Bremer generously allows us to use his classroom for meetings and events. As our economics teacher, he helps break down complex financial concepts into clear, actionable insights that inspire our members.
        </p>
      </div>
    </div>
  </div>
);

export default About;