import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Contact from '../components/Contact';

export default function Home() {
  const location = useLocation();

  /* When navigating here from another page with a scrollTo target,
     wait a tick for the DOM to mount then scroll to the section. */
  useEffect(() => {
    const hash = location.state?.scrollTo;
    if (hash) {
      // Small delay lets the page transition / mount finish
      const timer = setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [location.state]);

  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Contact />
    </>
  );
}
