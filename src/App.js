import Navbar from "./components/NavBar/navbar"; // Path: /navbar
import Intro from "./components/Intro/intro";   // Path: /intro
import Skills from "./components/Skills/skills"; // Path: /skills
import Works from "./components/Works/works";   // Path: /works
import Contact from "./components/Contact/contact"; // Path: /contact
import Footer from "./components/Footer/footer"; // Path: /footer

function App() {
  return (
    <div className="App">
      {/* The component names themselves (Navbar, Intro, etc.) must remain capitalized! */}
      <Navbar/>
      <Intro/>
      <Skills/>
      <Works/>
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;

