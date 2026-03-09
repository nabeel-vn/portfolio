// Example of corrected imports in src/App.js
import React from 'react';
import './App.css'; 

// All import statements must now match the disk file capitalization (e.g., 'Navbar.js', not 'navbar.js')
import NavBar from './components/NavBar/Navbar.js';
import Intro from './components/Intro/Intro.js';
import Skills from './components/Skills/Skills.js';
import Works from './components/Works/Works.js';
import Contact from './components/Contact/Contact.js';
import Footer from './components/Footer/Footer.js';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Intro />
      <Skills />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

