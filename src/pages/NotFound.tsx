import { Link } from 'react-router-dom';

export default function NotFound() {
  return <div className="vibe-study py-20"><p className="eyebrow">404 · Page not found</p><h1 className="text-3xl my-6">This page could not be found.</h1><p className="text-slate-300 mb-6">Explore the projects from the portfolio homepage.</p><Link className="text-action" to="/">Back to portfolio →</Link></div>;
}
