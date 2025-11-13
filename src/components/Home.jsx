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
import { useNavigate } from 'react-router-dom';
import { StatCard } from './utils';

/**
 * Home page with navigation buttons using React Router.
 */
const Home = () => {
  const navigate = useNavigate();

  return (
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
          Learn investing, personal finance, and real-world money skills — no experience needed. Join us!
        </p>

        {/* Buttons – Now using navigate */}
        <div className="text-center space-y-4 md:space-y-0 md:space-x-6 flex flex-col md:flex-row justify-center">
          <button
            onClick={() => navigate('/join')}
            className="bg-llhs-maroon text-white font-bold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 w-full md:w-auto"
          >
            Get Started
          </button>

          <button
            onClick={() => navigate('/portfolio')}
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
};

export default Home;