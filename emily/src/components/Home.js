import { Link } from 'react-router-dom';
import heroTable from './nicetable.png';
import salmon from './salmon.jpg';
import salad from './salad2.jpg';
import fish from './fish.jpg';
import cake from './cake.jpg';
import toast from './toast.jpg';
import bread from './bread.JPG';
import pot from './pot.jpg';
import pot2 from './pot2.jpg';
import tomato from './tomato.JPG';
import foods from './foods.JPG';

const showcaseImages = [
  { src: salmon, alt: 'Seared salmon plate' },
  { src: salad, alt: 'Fresh plated salad' },
  { src: fish, alt: 'Seafood dish' },
  { src: cake, alt: 'Dessert course' },
  { src: toast, alt: 'Toasted course' },
  { src: bread, alt: 'Fresh bread service' },
  { src: pot, alt: 'Warm plated dish' },
  { src: pot2, alt: 'Comforting bowl dish' },
  { src: tomato, alt: 'Tomato preparation' },
];

const experienceCards = [
  {
    title: 'Tailored Menus',
    detail: 'Each event is shaped around your style, your guests, and your space.',
  },
  {
    title: 'Restaurant-Level Flow',
    detail: 'Clean pacing, polished service, and precise execution from prep to final course.',
  },
  {
    title: 'Homey Energy',
    detail: 'Warm hosting support so your table still feels personal and relaxed.',
  },
];

export default function Home() {
  return (
    <div className="home-page">
      <section className="section-shell home-hero">
        <div className="hero-copy">
          <p className="kicker">Private Chef Services</p>
          <h1>
            Modern private dining with a
            <span> home-at-the-table feeling.</span>
          </h1>
          <p className="hero-subtext">
            Elevated plating, warm hospitality, and a dining flow designed around your event.
          </p>
          <div className="signal-row">
            <span>Seasonal Sourcing</span>
            <span>Precision Service</span>
            <span>Digital Planning Flow</span>
          </div>
          <div className="hero-actions">
            <a className="btn btn-primary" href="mailto:emily@tablebyemily.com">
              Start Planning
            </a>
            <Link className="btn btn-secondary" to="/howitworks">
              See the Experience
            </Link>
          </div>
          <a className="scroll-cue" href="#menu-showcase">
            Scroll to Explore
          </a>
        </div>

        <div className="hero-media">
          <img src={heroTable} alt="Beautifully set table" className="hero-main-image" />
          <img src={foods} alt="Chef station" className="hero-float-card" />
        </div>
      </section>

      <section className="section-shell mosaic-section reveal" id="menu-showcase">
        <div className="section-heading">
          <p className="kicker">Visual Menu</p>
          <h2>Organic ingredients. Precision finish.</h2>
        </div>

        <div className="mosaic-grid">
          {showcaseImages.map((image, index) => (
            <figure className="mosaic-card reveal pop-reveal" key={image.alt + index}>
              <img src={image.src} alt={image.alt} loading="lazy" />
            </figure>
          ))}
        </div>
      </section>

      <section className="section-shell experience-section reveal">
        <div className="section-heading">
          <p className="kicker">What You Get</p>
          <h2>Professional execution, built for real homes.</h2>
        </div>

        <div className="experience-grid">
          {experienceCards.map((card) => (
            <article className="experience-card" key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.detail}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
