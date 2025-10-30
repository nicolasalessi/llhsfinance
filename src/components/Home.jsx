/**
 * ==============================================================================
 * LLHS Finance Club Website - Home Page Component
 * ==============================================================================
 *
 * This component displays the main landing content, including the hero section,
 * the club mission statement, and key value propositions (StatCards).
 *
 * Authors: Alexander Alessi & Nicolas Alessi
 * Copyright (c) 2025 LLHS Finance Club. All rights reserved.
 */

import React from 'react';
import { StatCard } from './utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

/**
 * Component for the main Home Page content, including the hero section and mission statement.
 * @param {object} props - The component props.
 * @param {function} props.setCurrentPage - Function to change the active page state (used by the "Get Started" button).
 */
const Home = ({ setCurrentPage }) => (
  <div className="space-y-12">
    
    {/* Hero Section */}
    <div className="bg-white p-6 rounded-2xl shadow-xl max-w-7xl mx-auto">
      <div className="flex justify-center mb-2">
        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-llhs-gold animate-circle-pulse shadow-md p-1">
          <img 
            src="/assets/logo/knights.png" 
            alt="Las Lomas Knights" 
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      <h2 className="text-4xl font-bold text-llhs-maroon mb-4 text-center">
        Welcome to LLHS Finance Club
      </h2>
      <p className="text-lg text-gray-700 mb-6 text-center">
        Learn investing, personal finance, and real-world money skills — no experience needed.
      </p>

      {/* Buttons */}
      <div className="text-center space-y-4 md:space-y-0 md:space-x-6 flex flex-col md:flex-row justify-center">
        <button
          onClick={() => setCurrentPage('Join')}
          className="bg-llhs-maroon text-white font-bold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 w-full md:w-auto"
        >
          Get Started
        </button>

        <button
          onClick={() => setCurrentPage('Portfolio')}
          className="bg-llhs-gold text-llhs-maroon font-bold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 w-full md:w-auto"
        >
          Check our Portfolio
        </button>
      </div>

    </div>

    {/* Keep animation class — prevents Tailwind purge */}
    <div className="hidden animate-circle-pulse"></div>

    {/* Mission Statement Section */}
    <div className="p-8 bg-white shadow-xl rounded-2xl border-t-4 border-llhs-gold">
      <h3 className="text-3xl font-bold text-llhs-maroon mb-4">Our Mission: Cultivating Capital</h3>
      <p className="text-gray-700 text-lg italic">
        Our high school finance club is a vibrant and engaging space for students interested in learning about finance and investing. We host competitive stock fantasy games where members can test their skills and strategies in a simulated environment, gaining real-world insights without any risk.
      </p>
      <p className="text-gray-700 text-lg italic mt-4">
        We bring in guest speakers, professionals from the finance community, to share their knowledge and experiences, providing a unique opportunity for students to learn directly from experts.
      </p>
      <p className="text-gray-700 text-lg italic mt-4">
        LLHS Finance emphasizes building a supportive and strong community, where students work together to deepen their understanding of finance and prepare for future challenges in the field.
      </p>
    </div>

    {/* Our Philosophy Section */}
    <div className="p-8 bg-white shadow-xl rounded-2xl border-t-4 border-llhs-gold">
      <h3 className="text-3xl font-bold text-llhs-maroon mb-6">Our Philosophy</h3>
      <p className="text-gray-700 text-lg mb-8 text-center max-w-3xl mx-auto">
        We teach <span className="font-bold text-llhs-maroon">financial literacy</span> and <span className="font-bold text-llhs-maroon">ethical investing</span> through hands-on practice, real-world tools, and leadership opportunities — empowering students to build wealth responsibly and lead with confidence.
      </p>

      {/* Integrated StatCards as Philosophy Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <StatCard 
          title="Financial Literacy" 
          description="Hands-on learning with real-world financial tools." 
        />
        <StatCard 
          title="Ethical Investing" 
          description="Developing a responsible, long-term approach to wealth." 
        />
        <StatCard 
          title="Leadership Development" 
          description="Opportunities to lead discussions and manage projects." 
        />
      </div>
    </div>

    {/* Guest Speakers Section */}
    <div className="p-8 bg-white shadow-xl rounded-2xl border-t-4 border-llhs-gold">
      <h3 className="text-3xl font-bold text-llhs-maroon mb-6">Guest Speakers</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <div className="flex items-center gap-2">
            <h4 className="font-semibold text-llhs-maroon text-lg">Jeff Ahrens</h4>
            <a
              href="https://www.linkedin.com/in/jeff-ahrens-94b306/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-llhs-maroon hover:text-llhs-gold transition-colors"
              aria-label="LinkedIn Profile"
            >
              <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5" />
            </a>
          </div>
          <p className="text-gray-700 mt-1">
            <span className="font-medium">Executive Director - Investments</span>
            <span className="text-gray-500"> at </span>
            <span className="font-medium">Oppenheimer & Co. Inc.</span>
          </p>
          <p className="text-sm text-gray-600 mt-2 italic">Topic: <span className="not-italic font-medium">Investing basics, portfolio management, balanced portfolios</span></p>
          <p className="text-sm text-gray-600">Date: <span className="font-medium">February 11, 2025</span></p>
        </div>

        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <div className="flex items-center gap-2">
            <h4 className="font-semibold text-llhs-maroon text-lg">Mike Frazier</h4>
            <a
              href="https://www.linkedin.com/in/mikefraziercaliforniainvest/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-llhs-maroon hover:text-llhs-gold transition-colors"
              aria-label="LinkedIn Profile"
            >
              <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5" />
            </a>
          </div>
          <p className="text-gray-700 mt-1">
            <span className="font-medium">Chairman</span>
            <span className="text-gray-500"> at </span>
            <span className="font-medium">Bedell Frazier Investment Counseling</span>
          </p>
          <p className="text-sm text-gray-600 mt-2 italic">Topic: <span className="not-italic font-medium">Financial literacy and the benefits of investing early.</span></p>
          <p className="text-sm text-gray-600">Date: <span className="font-medium">September 22, 2025</span></p>
        </div>

        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <div className="flex items-center gap-2">
            <h4 className="font-semibold text-llhs-maroon text-lg">Matt Macomber</h4>
            <a
              href="https://www.linkedin.com/in/macomber/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-llhs-maroon hover:text-llhs-gold transition-colors"
              aria-label="LinkedIn Profile"
            >
              <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5" />
            </a>
          </div>
          <p className="text-gray-700 mt-1">
            <span className="font-medium">SVP & Head of Digital Wealth - Americas</span>
            <span className="text-gray-500"> at </span>
            <span className="font-medium">Franklin Templeton</span>
          </p>
          <p className="text-sm text-gray-600 mt-2 italic">Topic: <span className="not-italic font-medium">Asset Management and the differences between stocks, ETFs, mutual funds and bonds.</span></p>
          <p className="text-sm text-gray-600">Date: <span className="font-medium">October 17, 2025</span></p>
        </div>

        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <div className="flex items-center gap-2">
            <h4 className="font-semibold text-llhs-maroon text-lg">David Stern</h4>
            <a
              href="https://www.linkedin.com/in/dsternsf/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-llhs-maroon hover:text-llhs-gold transition-colors"
              aria-label="LinkedIn Profile"
            >
              <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5" />
            </a>
          </div>
          <p className="text-gray-700 mt-1">
            <span className="font-medium">Managing Member</span>
            <span className="text-gray-500"> at </span>
            <span className="font-medium">Motion Technology Partners</span>
          </p>
          <p className="text-sm text-gray-600 mt-2 italic">Topic: <span className="not-italic font-medium">All about venture capital.</span></p>
          <p className="text-sm text-gray-600">Date: <span className="font-medium">November 17, 2025</span></p>
        </div>

        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <div className="flex items-center gap-2">
            <h4 className="font-semibold text-llhs-maroon text-lg">Matt Peletier</h4>
            <a
              href="https://www.linkedin.com/in/matthew-pelletier-1304a113/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-llhs-maroon hover:text-llhs-gold transition-colors"
              aria-label="LinkedIn Profile"
            >
              <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5" />
            </a>
          </div>
          <p className="text-gray-700 mt-1">
            <span className="font-medium">Managing Director</span>
            <span className="text-gray-500"> at </span>
            <span className="font-medium">REX Financial</span>
          </p>
          <p className="text-sm text-gray-600 mt-2 italic">Topic: <span className="not-italic font-medium">Investing in cryptocurrency.</span></p>
          <p className="text-sm text-gray-600">Date: <span className="font-medium">To be announced soon</span></p>
        </div>

      </div>

      <p className="text-center text-sm text-gray-500 mt-6 italic">
        More speakers announced regularly — follow us on Instagram!
      </p>
    </div>

    {/* Insights & Community Section - Video + Team Photo */}
    <div className="p-8 bg-white shadow-xl rounded-2xl border-t-4 border-llhs-gold">
      <h3 className="text-3xl font-bold text-llhs-maroon mb-6 text-center md:text-left">
        Las Lomas Finance Club Community
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        
        {/* Left: Video */}
        <div className="space-y-3">
          <p className="text-center md:text-left text-sm text-gray-600 italic">
            What’s it like to attend a LLHS Finance Club meeting? Check out a recent meeting with one of our guest speakers.
          </p>

          <div className="relative overflow-hidden rounded-lg shadow-lg bg-black aspect-video">
            <video
              className="w-full h-full object-cover"
              controls
              poster="/assets/logo/knights.png"
            >
              <source src="/assets/videos/club-meeting.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Right: Team Photo – Now matches video size */}
        <div className="space-y-3">
          <p className="text-center md:text-left text-sm text-gray-600 italic">
            We have nearly 50 members with many showing up consistently to our meetings and guest speaker events.
          </p>

          <div className="relative overflow-hidden rounded-lg shadow-lg bg-gray-100 aspect-video">
            <img
              src="/assets/team/llhsfinance-team.jpeg"
              alt="LLHS Finance Club Team"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

      </div>
    </div>

  </div>
);

export default Home;