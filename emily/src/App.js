import React from 'react';
import './App.css';
import logo from './components/small_logo2.png';
import img1 from './components/tomato.JPG';
import photo1 from './components/tomato.JPG';
// import photo2 from './drawbutnot.JPG';
// import photo6 from './foods.JPG';
import photo4 from './components/salad.JPG';
import photo5 from './components/beaut.JPG';
import photo3 from './components/bread.JPG';
import photo7 from './components/corn.JPG';
import cake from './components/cake.jpg';
import salmon from './components/salmon.jpg';
import salad2 from './components/salad2.jpg';
import fish from './components/fish.jpg';
import pot from './components/pot.jpg';
import pot2 from './components/pot2.jpg';
import toast from './components/toast.jpg';

function App() {
  const images = [ salad2, salmon, cake,
                  pot, photo5, toast,
                  photo3, photo7, pot2
                ];

  return (
    <div className="app">
      <header className="navbar">
        <div className="nav-left">
          <a href="/" className="nav-logo">
            <img src={logo} alt="Table by Emily" />
          </a>
          <nav className="nav-links">
            <a href="/">Home</a>
            {/* <a href="/about">About</a>
            <a href="/quote">Get a Quote</a> */}
          </nav>
        </div>
        <button className="hamburger" aria-label="Menu">
          <span />
          <span />
          <span />
        </button>
      </header>

      <main className="hero">
        <div className="hero-text">
          <img src={logo} alt="Table by Emily" className="hero-logo" />
          <h1>
            Private Chef Services<br/>
            where everyone has a seat at the … <em>TABLE</em>
          </h1>
        </div>

        <div className="gallery-grid">
          {images.map((src, i) => (
            <div className="gallery-item" key={i}>
              <img src={src} alt={`Dish ${i + 1}`} />
            </div>
          ))}
        </div>
        
      </main>
      <footer className="app-footer">
       <p>
         For inquiries, please email:&nbsp;
         <a href="mailto:emily@tablebyemily.com">
         emily@tablebyemily.com
         </a>
       </p>
     </footer>
    </div>
  );
}

export default App;
 

// App.js
// import React from 'react';
// import InstagramGrid from './components/InstagramGrid';

// import photo1 from './components/tomato.JPG';
// // import photo2 from './drawbutnot.JPG';
// // import photo6 from './foods.JPG';
// import photo4 from './components/salad.JPG';
// import photo5 from './components/beaut.JPG';
// import photo3 from './components/bread.JPG';
// import photo7 from './components/corn.JPG';
// import cake from './components/cake.jpg';
// import salmon from './components/salmon.jpg';
// import salad2 from './components/salad2.jpg';
// import fish from './components/fish.jpg';
// import pot from './components/pot.jpg';
// import pot2 from './components/pot2.jpg';
// import toast from './components/toast.jpg';

// function App() {
//   const images = [ salad2, salmon, cake,
//                    pot, photo5, toast,
//                    photo3, photo7, pot2
//                  ];

//   return (
//     <div style={{ maxWidth: 600, margin: '0 auto' }}>
//       <InstagramGrid images={images} />
//     </div>
//   );
// }

// export default App;





// // import logo from './logo.svg';
// // import './App.css';
// // import Menu from './components/Menu.js';
// // import Landing from './components/Landing.jsx';
// // import Home from './components/HomePage.jsx'
// // import Home2 from './components/HomePage2.jsx'

// // function App() {
// //   return (
// //     <div>
// //       <Home2 />
// //     </div>
// //   );
// // }

// // export default App;


// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //       {/* Insert the Menu component here */}
// //       <Menu />
// //     </div>
// //   );
// // }

// // export default App;
