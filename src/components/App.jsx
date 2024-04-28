import React, { useState, useEffect } from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

import { PortfolioProvider } from '../context/context';

import {
  heroData,
  aboutData,
  projectsData,
  contactData,
  footerData,
  techTalkData,
} from '../mock/data';
import TechTalks from './TechTalks/TechTalks';

function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [techTalks, setTechTalks] = useState([]);
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setTechTalks([...techTalkData]);
    setProjects([...projectsData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider value={{ hero, about, techTalks, projects, contact, footer }}>
      <Hero />
      <About />
      <TechTalks />
      <Projects />
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
