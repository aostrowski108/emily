// InstagramGrid.jsx
import React from 'react';
import './InstagramGrid.css';
import photo4 from './small_logo2.png';

export default function InstagramGrid({ images }) {
  return (
    <>
      <header className="site-header">
        <img src={photo4} alt="Logo" className="site-logo" />
        <nav className="site-nav">
          <a href="/"     className="nav-link">Home</a>
          <a href="/about" className="nav-link">About</a>
          <a href="/quote" className="nav-link">Get a Quote</a>
        </nav>
      </header>

      <div className="grid-wrapper">
        {/* ← NEW text column */}
        <div className="intro-text">
          <h2>Your Headline Here</h2>
          <p>Some descriptive copy that lives to the left of the grid.  
             You can style this any way you like.</p>
        </div>

        {/* ← Instagram grid stays the same */}
        <div className="instagram-grid">
          {images.slice(0, 9).map((src, i) => (
            <div className="instagram-grid-item" key={i}>
              <img src={src} alt={`Grid image ${i + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}


// // InstagramGrid.jsx
// import React from 'react';
// import './InstagramGrid.css';
// import photo4 from './small_logo2.png';


// export default function InstagramGrid({ images }) {
//   return (
//     <>
//       <header className="site-header">
//         <img src={photo4} alt="Logo" className="site-logo" />
//         <nav className="site-nav">
//           <a href="/" className="nav-link">Home</a>
//           <a href="/about" className="nav-link">About</a>
//           <a href="/quote" className="nav-link quote-button">Schedule an Event</a>
//         </nav>
//       </header>

//       <div className="grid-wrapper">
//         <div className="instagram-grid">
//           {images.slice(0, 9).map((src, i) => (
//             <div className="instagram-grid-item" key={i}>
//               <img src={src} alt={`Grid image ${i + 1}`} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }
