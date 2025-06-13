import './App.css';
import Welcome from './components/Welcome';
import AboutMe from './components/AboutMe';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <>
     <Navbar />
      <Welcome />

      <section id="about">
        <AboutMe />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>


    </>
    
  );
}

export default App;