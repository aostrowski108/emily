import React from 'react';
import bowl from './bowl.JPG';
import corn from './corn.JPG';
import tableImage from './tb2.png';

const steps = [
  {
    title: 'Discovery Call',
    detail: 'Quick alignment on event goals, guest count, style, and constraints.',
  },
  {
    title: 'Custom Menu Build',
    detail: 'Chef Emily drafts a menu and service approach tailored to your event.',
  },
  {
    title: 'Event Day Execution',
    detail: 'Prep, cooking, plating, and cleanup are handled so you can host fully.',
  },
];

export default function QuestionnairePage() {
  return (
    <div className="experience-page">
      <section className="section-shell process-hero reveal">
        <div className="process-copy">
          <p className="kicker">How It Works</p>
          <h1>A modern private-chef workflow from first call to final bite.</h1>
          <p>
            The process is structured enough to feel professional and smooth,
            while still preserving a warm, personal experience for your guests.
          </p>
        </div>

        <div className="process-image-stack">
          <img src={tableImage} alt="Event dining table" className="stack-main" />
          <img src={corn} alt="Ingredient detail" className="stack-float" />
        </div>
      </section>

      <section className="section-shell process-main reveal">
        <div className="process-timeline">
          {steps.map((step, index) => (
            <article className="timeline-item reveal" key={step.title}>
              <span className="timeline-number">0{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.detail}</p>
            </article>
          ))}
        </div>

        <div className="interest-panel reveal">
          <img src={bowl} alt="Prepared dish" className="interest-image" loading="lazy" />

          <form className="interest-form" onSubmit={(event) => event.preventDefault()}>
            <h3>Event Interest Form</h3>

            <label>
              Name
              <input type="text" placeholder="Your name" />
            </label>

            <label>
              Email
              <input type="email" placeholder="you@email.com" />
            </label>

            <label>
              Event Type
              <select defaultValue="">
                <option value="" disabled>
                  Select an option
                </option>
                <option>Intimate Dinner</option>
                <option>Birthday Celebration</option>
                <option>Corporate Hosting</option>
                <option>Custom Event</option>
              </select>
            </label>

            <label>
              Notes
              <textarea rows="4" placeholder="Guest count, food vibe, or special details" />
            </label>

            <button type="submit" className="btn btn-primary">
              Request Availability
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
