import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar({ isMenuOpen, setIsMenuOpen }) {
  return (
    <nav className="fixed w-full top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-primary/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          <div className="hidden md:flex gap-8 text-center justify-end items-center flex-1">
            <a href="/#about" className="hover:text-primary transition">About</a>
            <Link to="/projects" className="hover:text-primary transition">Projects</Link>
            <a href="/#skills" className="hover:text-primary transition">Skills</a>
            <a href="/#contact" className="hover:text-primary transition">Contact</a>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4 flex flex-col gap-4">
            <a
              href="/#about"
              className="hover:text-primary transition"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <Link
              to="/projects"
              className="hover:text-primary transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <a
              href="/#skills"
              className="hover:text-primary transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Skills
            </a>
            <a
              href="/#contact"
              className="hover:text-primary transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}