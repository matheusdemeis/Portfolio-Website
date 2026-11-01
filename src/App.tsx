import type { ReactElement } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import NotFound from './pages/NotFound';
import RouteEffects from './components/RouteEffects';

export default function App(): ReactElement {
  const { pathname } = useLocation();
  return (
    <div className="min-h-screen bg-[#10151c] text-white">
      {pathname !== '/' && <a className="skip-link" href="#main-content">Skip to content</a>}
      <main id="main-content" tabIndex={-1}>
        <Routes>
          <Route caseSensitive path="/" element={<Home />} />
          <Route caseSensitive path="/projects" element={<Navigate to="/" replace />} />
          <Route caseSensitive path="/projects/:slug" element={<ProjectDetail />} />
          <Route caseSensitive path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <RouteEffects />
    </div>
  );
}
