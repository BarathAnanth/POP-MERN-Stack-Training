import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import CodingProfiles from './components/CodingProfiles';
import Contact from './components/Contact';
import './styles/styles.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="app-container">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <Home setActiveSection={setActiveSection} />
      <About />
      <Projects />
      <Skills />
      <CodingProfiles />
      <Contact /> 
    </div>
  );
}

export default App;