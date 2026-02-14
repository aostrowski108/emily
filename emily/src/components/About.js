import emilyPortrait from './emilyemily.jpeg';
import beautyPlate from './beaut.JPG';
import tableScene from './webtable_01.png';
import artisticPlate from './drawbutnot.JPG';

export default function About() {
  return (
    <div className="about-page">
      <section className="section-shell about-hero reveal">
        <div className="about-portrait-wrap">
          <img src={emilyPortrait} alt="Chef Emily portrait" className="about-portrait" />
        </div>

        <div className="about-copy">
          <p className="kicker">About Emily</p>
          <h1>Chef-driven dining crafted for meaningful gatherings.</h1>
          <p>
            Emily brings a private-chef mindset that blends thoughtful sourcing, refined technique,
            and a welcoming table atmosphere. The goal is simple: make every guest feel taken care of.
          </p>
          <p>
            From intimate dinners to larger celebrations, each menu is tuned to your people,
            your space, and the moment you want to create.
          </p>
        </div>
      </section>

      <section className="section-shell about-gallery reveal">
        <article className="about-panel reveal">
          <img src={beautyPlate} alt="Detailed plated dish" loading="lazy" />
          <div>
            <h3>Ingredient-Forward Menus</h3>
            <p>
              Seasonal choices and balanced courses keep the meal fresh, expressive, and grounded.
            </p>
          </div>
        </article>

        <article className="about-panel reveal">
          <img src={tableScene} alt="Styled event table" loading="lazy" />
          <div>
            <h3>Designed for Hosting</h3>
            <p>
              A clean event flow lets you stay present with guests while the kitchen and service run smoothly.
            </p>
          </div>
        </article>

        <article className="about-panel reveal">
          <img src={artisticPlate} alt="Artfully plated course" loading="lazy" />
          <div>
            <h3>High Touch, Not Stuffy</h3>
            <p>
              Professional standards with a relaxed, approachable warmth throughout the evening.
            </p>
          </div>
        </article>
      </section>
    </div>
  );
}
