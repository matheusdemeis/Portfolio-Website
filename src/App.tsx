import type { ReactElement } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';

export default function App(): ReactElement {
  const location = useLocation();
  const reducedMotion = useReducedMotion();

  return (
    <div className="min-h-screen bg-[#10151c] text-white">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={(
              <motion.main
                initial={reducedMotion ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reducedMotion ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: reducedMotion ? 0 : 0.2, ease: 'easeOut' }}
              >
                <Home />
              </motion.main>
            )}
          />
          <Route path="/projects" element={<Navigate to="/" replace />} />
          <Route
            path="/projects/:slug"
            element={(
              <motion.main
                initial={reducedMotion ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reducedMotion ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: reducedMotion ? 0 : 0.2, ease: 'easeOut' }}
              >
                <ProjectDetail />
              </motion.main>
            )}
          />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}
