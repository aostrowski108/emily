// src/components/About.js
import '../App.css';           // reuse your existing styles
import emilyImg from './emilyemily.jpeg'; // replace with your chef photo filename

export default function About() {
  return (
    <main className="about-main">
      {/* intro line */}
      <h2 className="page-intro">
        <em>TABLE</em> by Emily is a private chef service tailored to any event you can dream up.
      </h2>

      {/* two-column layout */}
      <div className="about-content">
        {/* left: photo + caption */}
        <figure className="about-image">
          <img src={emilyImg} alt="Chef and founder Emily Breitenecker" />
          <figcaption>Chef and founder Emily Breitenecker</figcaption>
        </figure>

        {/* right: mission text */}
        <div className="about-text">
          <p>
            <strong>Our mission</strong> is to provide an inclusive private chef experience,
            enabling opportunities for communities to gather around the <em>TABLE</em>.
            <strong> Enjoy stress-free hosting</strong>, so all you have to focus on
            is enjoying time with your guests.
            <strong> Together, we’ll collaborate</strong> to bring your dinner
            party vision to life, curating a menu that reflects your tastes,
            your guests’ preferences, and the vibe you want to create.
          </p>
          <p>
            <strong>Pull up a seat at your <em>TABLE</em>.</strong>
          </p>
        </div>
      </div>
    </main>
  );
}
