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
import NavBar from './components/NavBar';
import { Routes, Route } from 'react-router-dom';
import About from './components/About.js';
import Home from './components/Home.js';


function App() {

  return (
    <div className="app">
      

      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/quote" element={<Quote />} /> */}
      </Routes>

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
