import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    const hash =
      location.state?.scrollTo ||
      (location.hash ? location.hash.replace('#', '') : '');
    if (hash) {
      const timer = setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [location.state, location.hash]);

  return <Hero />;
}
