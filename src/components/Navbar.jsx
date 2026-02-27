import { Menu, X } from 'lucide-react';

export default function Navbar({ isMenuOpen, setIsMenuOpen }) {
  const goToSection = (e, hash) => {
    e.preventDefault();
    document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <nav
      className="fixed w-full top-0 z-50 border-b border-primary/20"
      style={{
        background: 'rgba(15, 20, 35, 0.85)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          <div className="hidden md:flex gap-8 text-center justify-end items-center flex-1">
            <a href="#about" onClick={(e) => goToSection(e, 'about')} className="hover:text-primary transition">About</a>
            <a href="#experience" onClick={(e) => goToSection(e, 'experience')} className="hover:text-primary transition">Experience</a>
            <a href="#projects" onClick={(e) => goToSection(e, 'projects')} className="hover:text-primary transition">Projects</a>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4 flex flex-col gap-4">
            <a href="#about" className="hover:text-primary transition" onClick={(e) => goToSection(e, 'about')}>About</a>
            <a href="#experience" className="hover:text-primary transition" onClick={(e) => goToSection(e, 'experience')}>Experience</a>
            <a href="#projects" className="hover:text-primary transition" onClick={(e) => goToSection(e, 'projects')}>Projects</a>
          </div>
        )}
      </div>
    </nav>
  );
}
