import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found');
}

const app = <React.StrictMode><BrowserRouter><App /></BrowserRouter></React.StrictMode>;
// Hydrate generated HTML only when it belongs to this route. SPA fallback
// hosts may serve the homepage document for an unknown URL.
const renderedPath = rootElement.dataset.route;
const currentPath = window.location.pathname.replace(/\/$/, '') || '/';
if (rootElement.hasChildNodes() && (renderedPath === currentPath || (renderedPath === '/404' && !['/', '/projects/VibePlay', '/projects/tandem', '/projects/InsurFlow'].includes(currentPath)))) {
  ReactDOM.hydrateRoot(rootElement, app);
} else {
  ReactDOM.createRoot(rootElement).render(app);
}
