// src/components/HowItWorks.js
import React from 'react';
import '../App.css';

export default function HowItWorks() {
  return (
    <main className="how-main">
      {/* Page title, pinned under the fixed navbar */}
      <h2 className="how-title">HOW IT WORKS:</h2>

      {/* Two-column content: left text, right button */}
      <div className="how-content">
        {/* LEFT COLUMN: Prior to Event / Day of Event */}
        <div className="how-left">
          <h3>Prior to Event:</h3>
          <ol>
            <li>Fill out the information form</li>
            <li>Schedule a 30-minute in-person meeting to finalize the menu, event details, and complete a walkthrough</li>
            <li>Send out invitations from our website</li>
            <li>Meet</li>
          </ol>

          <h3>Day of Event:</h3>
          <ol>
            <li>Our team arrives 2 hours prior to set up</li>
            <li>Your Job: Make memories at your <em>TABLE</em></li>
          </ol>
        </div>

        {/* RIGHT COLUMN: Button */}
        <div className="how-right">
          {/* 
            For now this can point to “#” or “/schedule” if you plan a separate scheduling form route later.
            We'll use a placeholder anchor. 
          */}
          <a href="/schedule" className="schedule-button">
            SCHEDULE YOUR<br/>NEXT EVENT
          </a>
        </div>
      </div>
    </main>
  );
}
