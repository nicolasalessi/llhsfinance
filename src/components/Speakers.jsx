/**
 * ==============================================================================
 * LLHS Finance Club Website - Speakers Page (Speakers.jsx)
 * ==============================================================================
 *
 * Dynamically loads speaker data from /data/speakers.json on mount.
 * Renders one full-width light-gray card per speaker, newest to oldest.
 *
 * Authors: Alexander Alessi & Nicolas Alessi
 * Copyright (c) 2025 LLHS Finance Club. All rights reserved.
 *
 */

import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

/**
 * Speakers page – loads from public/data/speakers.json
 * Displays one card per speaker, newest first, with soft yellow border.
 */
const Speakers = () => {
  const [speakers, setSpeakers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Load speakers on mount
  useEffect(() => {
    const fetchSpeakers = async () => {
      try {
        const response = await fetch('/data/speakers.json');
        if (!response.ok) throw new Error('Failed to load speakers');
        const data = await response.json();
        setSpeakers(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchSpeakers();
  }, []);

  if (loading) {
    return (
      <div className="space-y-8 p-6 bg-white rounded-2xl shadow-xl text-center">
        <h2 className="text-4xl font-bold text-llhs-maroon border-b pb-3 border-llhs-gold">
          Guest Speakers
        </h2>
        <p className="text-gray-600">Loading speakers...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="space-y-8 p-6 bg-white rounded-2xl shadow-xl text-center">
        <h2 className="text-4xl font-bold text-llhs-maroon border-b pb-3 border-llhs-gold">
          Guest Speakers
        </h2>
        <p className="text-red-600">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="space-y-8 p-6 bg-white rounded-2xl shadow-xl">
      <h2 className="text-4xl font-bold text-llhs-maroon border-b pb-3 border-llhs-gold">
        Guest Speakers
      </h2>
      <p className="text-xl text-gray-700">
        We bring in top finance professionals to share real-world insights with our members.
      </p>

      {/* Speaker Cards – One per row, light gray + soft yellow border */}
      <div className="space-y-6">
        {speakers.map((speaker, index) => (
          <div
            key={index}
            className="bg-gray-100 p-6 rounded-xl shadow-md border border-llhs-gold/30"
          >
            <div className="flex items-center gap-2 mb-2">
              <h4 className="font-semibold text-llhs-maroon text-lg">{speaker.name}</h4>
              <a
                href={speaker.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-llhs-maroon hover:text-llhs-gold transition-colors"
                aria-label="LinkedIn Profile"
              >
                <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5" />
              </a>
            </div>
            <p className="text-gray-700">
              <span className="font-medium">{speaker.title}</span>
              <span className="text-gray-500"> at </span>
              <span className="font-medium">{speaker.company}</span>
            </p>
            <p className="text-sm text-gray-600 mt-2 italic">
              Topic: <span className="not-italic font-medium">{speaker.topic}</span>
            </p>
            <p className="text-sm text-gray-600">
              Date: <span className="font-medium">{speaker.date}</span>
            </p>
          </div>
        ))}
      </div>

      <p className="text-sm text-gray-600 mt-6 italic text-center">
        More speakers announced regularly — follow us on Instagram!
      </p>
    </div>
  );
};

export default Speakers;