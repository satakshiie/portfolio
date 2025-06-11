import './App.css';
import Welcome from './components/Welcome';
import AboutMe from './components/AboutMe';
import Navbar from './components/Navbar';
import Skills from './components/Skills';

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
    </>
  );
}

export default App;