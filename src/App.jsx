import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import SoundCloudPlayer from "./components/SoundCloudPlayer";

function App() {
  return (
    <div className="bg-black min-h-screen font-sans selection:bg-white selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Certifications />
      </main>
      <Contact />
      <SoundCloudPlayer />
    </div>
  );
}

export default App;
