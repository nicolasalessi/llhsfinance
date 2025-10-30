/**
 * ==============================================================================
 * LLHS Finance Club Website - Join Page Component
 * ==============================================================================
 *
 * This component displays information on how to join the club, including meeting
 * details, and contains the interactive interest form for students to sign up.
 *
 * Authors: Alexander Alessi & Nicolas Alessi
 * Copyright (c) 2025 LLHS Finance Club. All rights reserved.
 */

import React from 'react';

/**
 * Component for the Join Page content, including the meeting details and the interest sign-up form.
 * @param {object} props - The component props.
 */
const Join = () => {
  return (
    <div className="space-y-8 p-6 bg-white rounded-2xl shadow-xl">
      <h2 className="text-4xl font-bold text-llhs-maroon border-b pb-3 border-llhs-gold">Ready to Join?</h2>
      <p className="text-xl text-gray-700">
        Membership is open to all LLHS students. No prior knowledge is required. Just bring your intellectual curiosity.
      </p>

      {/* Meeting Details Card */}
      <div className="bg-gray-100 p-6 rounded-xl shadow-md">
        <h3 className="text-2xl font-semibold text-llhs-maroon mb-2">Meeting Information</h3>
        <ul className="space-y-2 text-gray-700">
          <li><strong>Monthly Meetings</strong> — These are held in classroom 503 (but are subject to change).</li>
          <li><strong>Next Orientation</strong> — Will be announced before the end of 2025</li>
        </ul>
        <p className="text-sm text-gray-600 mt-4 italic">
          * Follow the LLHS Finance club Instagram to ensure you stay updated on meeting places, times and speakers.
        </p>
      </div>

      {/* Contact Us */}
      <div className="space-y-2 pt-4 border-t">
        <h3 className="text-2xl font-semibold text-llhs-maroon">Contact Us</h3>
        <p className="text-gray-700">
          For questions, send an email to{' '}
          <a
            href="mailto:mason.grant26@auhsdschools.org"
            className="text-llhs-maroon font-medium underline hover:text-llhs-gold transition-colors"
          >
            mason.grant26@auhsdschools.org
          </a> or call/text Mason Grant at 925-542-5480
          .
        </p>
      </div>
    </div>
  );
};

export default Join;