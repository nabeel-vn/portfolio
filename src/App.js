import React, { useEffect } from 'react';
import './App.css';

import NavBar from './components/NavBar/Navbar.js';
import Intro from './components/Intro/Intro.js';
import Skills from './components/Skills/Skills.js';
import Works from './components/Works/Works.js';
import Journeys from './components/Journeys/Journeys.js';
import Articles from './components/Articles/Articles.js';
import Contact from './components/Contact/Contact.js';
import Footer from './components/Footer/Footer.js';

function App() {
  useEffect(() => {
    document.documentElement.classList.add('app-ready');
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Intro />
      <Skills />
      <Works />
      {/*<Journeys />*/}
      <Articles />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;