// src/components/Home.js
import logo   from './small_logo2.png';
import img1 from './tomato.JPG';
import photo1 from './tomato.JPG';
// import photo2 from './drawbutnot.JPG';
// import photo6 from './foods.JPG';
import photo4 from './salad.JPG';
import photo5 from './beaut.JPG';
import photo3 from './bread.JPG';
import photo7 from './corn.JPG';
import cake from './cake.jpg';
import salmon from './salmon.jpg';
import salad2 from './salad2.jpg';
import fish from './fish.jpg';
import pot from './pot.jpg';
import pot2 from './pot2.jpg';
import toast from './toast.jpg';

export default function Home() {
  const images = [ salad2, salmon, cake,
                    pot, photo5, toast,
                    photo3, photo7, pot2
                  ];

  return (
    <main className="hero">
      <div className="hero-text">
        <img src={logo} alt="Table by Emily" className="hero-logo" />
        <h1>
          Private Chef Services<br/>
          where everyone has a seat at the … <em>TABLE</em>
        </h1>
      </div>

      <div className="gallery-grid">
        {images.map((src,i) => (
          <div className="gallery-item" key={i}>
            <img src={src} alt={`Dish ${i+1}`} />
          </div>
        ))}
      </div>
    </main>
  );
}