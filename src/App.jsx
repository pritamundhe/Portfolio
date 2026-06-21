import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import SoundCloudPlayer from "./components/SoundCloudPlayer";
import IntroScreen from "./components/IntroScreen";
import AutoScrollTour from "./components/AutoScrollTour";

function App() {
  const [introComplete, setIntroComplete] = useState(false);
  const [tourComplete, setTourComplete] = useState(false);

  return (
    <div className="bg-black min-h-screen font-sans selection:bg-white selection:text-black relative">
      {/* Intro splash screen */}
      <IntroScreen onComplete={() => setIntroComplete(true)} />

      <div className="scanlines"></div>
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Certifications />
      </main>
      <Contact />
      <SoundCloudPlayer />

      {/* Auto-scroll guided tour — starts after intro is done */}
      {introComplete && !tourComplete && (
        <AutoScrollTour onComplete={() => setTourComplete(true)} />
      )}
    </div>
  );
}

export default App;
